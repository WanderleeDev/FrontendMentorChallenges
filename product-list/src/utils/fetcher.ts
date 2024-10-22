interface ResponseFetcher<T> {
  error: string | null;
  data: T | null;
}

export default async function fetcher<T>(
  url: string
): Promise<ResponseFetcher<T>> {
  const response: ResponseFetcher<T> = {
    error: null,
    data: null,
  };

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    response.data = (await res.json()) as T;
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Something went wrong";

    response.error = errorMessage;
  }

  return response;
}
