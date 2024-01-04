import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const useApi = () => ({
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
  postImage: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await api.post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      throw error; // Propaga o erro para que quem chama este método possa tratá-lo
    }
  },
  getUserProjects: async (idUser: number, token: string) => {
    try {
      const response = await api.get(`/project/userProjects/${idUser}`, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao obter projetos do usuário: ', error);
      throw error;
    }
  }
});
