/* eslint-disable no-unused-vars */
import { ApiResponse } from "./models/ApiResponse";
import { User } from "./models/User";

export interface IAuthService {
  login(email: string, password: string): Promise<ApiResponse<User>>;
}
