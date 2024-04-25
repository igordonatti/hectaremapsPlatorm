import { RegisterUser } from "../../types/RegisterUser";
import { api } from "./provider";

export const useUser = () => ({
  getAllUsers: async (token: string) => {
    try {
      const response = await api.get('/user/all', {
        headers: {Authorization: `Bearer ${token}`}
      })
      return response.data;
    } catch(error) {
      console.log('Erro ao retornar usuários')
    }
  },
  registerUser: async (registerForm: RegisterUser) => {
    try {
      const response = await api.post('/user', registerForm)
      return response.data;
    } catch(error) {
      console.log('Erro ao solicitar cadastro: ', error);
      throw error;
    }
  },
})