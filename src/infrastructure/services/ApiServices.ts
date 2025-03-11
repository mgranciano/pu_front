import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IApiService } from "../../domain/interfaces/IApiService";

export class ApiService implements IApiService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async request<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: object
  ): Promise<T> {
    try {
      const config: AxiosRequestConfig = { method, url: endpoint, data };
      const response = await this.api.request<T>(config);
      return response.data;
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        throw new Error("Tiempo de espera agotado. El servidor no respondió.");
      }
      throw new Error(
        error.response?.data?.mensaje || "Error desconocido en la API"
      );
    }
  }
}
