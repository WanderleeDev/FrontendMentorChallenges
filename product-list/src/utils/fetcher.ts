import { ResponseHandler } from "@/interfaces/Response.interface";
import { handleError } from "./handleError";

export default async function fetcher<T>(
  url: string
): Promise<ResponseHandler<T>> {
  let response: ResponseHandler<T> = {
    error: null,
    data: {} as T,
  };

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: ResponseHandler<T> = await res.json();

    response = { ...data };

    return response;
  } catch (err) {
    response.error = handleError(err);
    return response;
  }
}
