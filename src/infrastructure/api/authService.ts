import { ApiService } from "../../infrastructure/services/ApiServices";

export interface AuthResponse {
  estatus: string;
  mensaje: string;
  responseObject?: {
    accessToken: string;
    id?: number;
    name?: string;
    email?: string;
  };
}

export class AuthService {
  private readonly apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await this.apiService.request<AuthResponse>(
        "/auth/login",
        "POST",
        { email, password }
      );

      if (!response || typeof response !== "object" || !response.estatus) {
        throw new Error("Respuesta de login inválida");
      }

      if (response.estatus === "W" || response.estatus === "E") {
        throw new Error(response.mensaje || "Error en la autenticación");
      }

      if (!response.responseObject?.accessToken) {
        throw new Error("Token no recibido en la respuesta del servidor");
      }

      return response;
    } catch (error) {
      return {
        estatus: "E",
        mensaje:
          error instanceof Error ? error.message : "Error desconocido en login",
      };
    }
  }
}
