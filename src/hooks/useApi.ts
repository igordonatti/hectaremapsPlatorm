import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {},
  signIn: async (email: string, pwd: string) => {
    const response = await api.post('/register/signIn',  {email, pwd})
    return response.data;
  },
  logout: async () => {}  
});
