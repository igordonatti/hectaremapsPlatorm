import axios from "axios";
import { RegisterUser } from "../types/RegisterUser";
import { CreateServiceDTO } from "../pages/New Service/dto/createService.dto";

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
  postImage: async (file: File, idFlight: string) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('idFlight', idFlight);
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
  },
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
  registerUser: async (registerForm: RegisterUser) => {
    try {
      const response = await api.post('/user', registerForm)
      return response.data;
    } catch(error) {
      console.log('Erro ao solicitar cadastro: ', error);
      throw error;
    }
  },
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
  createFlight: async (projectId: number, token: string) => {
    try {
      const response = await api.post('/flight', {projectId}, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      throw new Error('useApi: error ao criar voo: ');
    }
  },
  getServicesByFlight: async (flightId: number, token: string) => {
    try { 
      const response = await api.get(`/service/${flightId}`, {
        headers: {Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao obter serviços deste voo: ', error);
      throw error;
    }
  },
  getFlightsByIdProject: async (projectID: number, token: string) => {
    try {
      const response = await api.get(`flight/${projectID}`, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao obter voos: ', error);
      throw error;
    }
  },
  createServiceByFlighId: async (data: CreateServiceDTO, token: string) => {
    console.log(data)

    try {
      const response = await api.post(`service/create`, data, {
        headers: { Authorization: `Bearer ${token}`}
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao criar serviço: ', error);
      throw error;
    }
  }
});
