import { api } from "./provider";

export const useProject = () => ({
  createProject: async (name: string, userId: number, token: string) => {
    try {
      const response = await api.post('/project/create', {name, userId}, {
        headers: { Authorization: `Bearer ${token}`}
      });
      return response.data;
    } catch (error) {
      console.log('Erro ao criar projeto: ', error);
      throw error;
    }
  },
  deleteProject: async (id: number, userId: number, token: string) => {    
    try {
      const response = await api.post('/project/delete', {id, userId}, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      console.log('Erro ao deletar projeto: ', error);
      throw error;
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
  },
  getProjectById: async (id: number, token: string) => {
    try {
      const response = await api.get(`/project/${id}`, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      throw new Error('useApi: error ao buscar projeto: ')
    }
  },
})