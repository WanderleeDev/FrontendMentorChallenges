import { MessagesError } from "@/interfaces/ErrorMessages.enum";

export function handleError(e: unknown) {
  if (e instanceof Error) {
    return e.message;
  }

  return MessagesError.AN_UNKNOWN_ERROR_OCCURRED;
}
