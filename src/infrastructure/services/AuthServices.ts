// src/infrastructure/services/AuthService.ts
import { IAuthService } from "../../domain/interfaces/IAuthService";
import { IApiService } from "../../domain/interfaces/IApiService";
import { ApiResponse } from "../../domain/interfaces/models/ApiResponse";
import { User } from "../../domain/interfaces/IAuth";

export class AuthService implements IAuthService {
  private readonly apiService: IApiService;

  constructor(apiService: IApiService) {
    this.apiService = apiService;
  }

  async login(email: string, password: string): Promise<ApiResponse<User>> {
    return this.apiService.request<ApiResponse<User>>("/auth/login", "POST", {
      email,
      password,
    });
  }
}
