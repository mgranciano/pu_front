/* eslint-disable no-unused-vars */
export interface IApiService {
  request<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: object
  ): Promise<T>;
}
