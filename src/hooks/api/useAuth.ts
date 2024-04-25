import { api } from "./provider";

export const useAuth = () => ({
  validateToken: async (token: string) => {
    try {
      const response = await api.post('/validate', { token });
      return response.data;
    } catch (error) {
      return false;
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post('/login',  {email, password})
      return response.data;
    } catch (error) {
      return "Usuário ou senha inválidos";
    }
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
})