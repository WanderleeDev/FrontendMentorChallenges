import { Languages } from "@/interfaces/Languages.enum";
import { ResponseHandler } from "@/interfaces/Response.interface";
import { prisma } from "@/lib/prismaClient";
import { MessagesError } from "@/interfaces/ErrorMessages.enum";
import { handleError } from "@/utils/handleError";

export async function findByProduct<T>(
  id: string,
  lang: Languages = Languages.EN
): Promise<ResponseHandler<T>> {
  const response: ResponseHandler<T> = {
    data: {} as T,
    error: null,
  };

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      response.error = MessagesError.NO_PRODUCTS_FOUND;
      return response;
    }

    const translation = await prisma.translation.findFirst({
      where: {
        id: { in: product.translationIds },
        language: lang,
      },
    });

    if (!translation) {
      response.error = MessagesError.TRANSLATION_NOT_FOUND;
      return response;
    }

    response.data = {
      ...product,
      name: translation.name,
      category: translation.category,
    } as T;

    return response;
  } catch (error) {
    response.error = handleError(error);

    return response;
  }
}
