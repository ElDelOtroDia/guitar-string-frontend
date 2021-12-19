export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  token?: string;
  refreshToken?: string;
}
