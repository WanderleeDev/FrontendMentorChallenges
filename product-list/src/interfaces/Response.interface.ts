export interface ResponseHandler<T> {
  data: T;
  error: null | string;
}
