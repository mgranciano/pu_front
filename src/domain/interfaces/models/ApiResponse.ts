export interface ApiResponse<T> {
  estatus: "S" | "E"; // "S" para éxito, "E" para error
  mensaje: string;
  responseObject: T;
}
