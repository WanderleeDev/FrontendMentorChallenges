import { MessagesError } from "@/interfaces/ErrorMessages.enum";
import { Languages } from "@/interfaces/Languages.enum";
import { ResponseHandler } from "@/interfaces/Response.interface";
import { handleError } from "@/utils/handleError";
import { prisma } from "@/lib/prismaClient";

export async function getAllProducts<T>(
  lang: Languages = Languages.EN
): Promise<ResponseHandler<T>> {
  const response: ResponseHandler<T> = {
    data: {} as T,
    error: null,
  };

  try {
    const translations = await prisma.translation.findMany({
      where: { language: lang },
    });

    if (translations.length <= 0) {
      response.error = MessagesError.NO_TRANSLATIONS_FOUND;
      return response;
    }

    const translationMap = new Map(translations.map((t) => [t.id, t]));

    const products = await prisma.product.findMany({
      where: { translationIds: { hasSome: translations.map((t) => t.id) } },
    });

    if (products.length <= 0) {
      response.error = MessagesError.NO_PRODUCTS_FOUND;
      return response;
    }

    const productWithTranslation = products.map((p) => {
      const translate = p.translationIds
        .map((id) => translationMap.get(id))
        .find((t) => t !== undefined);

      if (!translate) throw new Error(MessagesError.TRANSLATION_NOT_FOUND);

      return { ...p, name: translate.name, category: translate.category };
    });

    response.data = productWithTranslation as T;

    return response;
  } catch (error) {
    response.error = handleError(error);

    return response;
  }
}
