import { ApiService } from "./services/ApiServices";
import { AuthService } from "./services/AuthServices";

const apiService = new ApiService();
const authService = new AuthService(apiService);

export { apiService, authService };
