import { api } from "./provider";

export const useFlight = () => ({
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
  deleteFlight: async (idFlight: number, token: string) => {
    try {
      console.log(idFlight)

      const response = await api.post('/flight/delete', {idFlight}, {
        headers: { Authorization: `Bearer ${token}}`}
      })

      return response;
    } catch (error) {
      console.error('Erro ao deletar o voo: ', error);
      throw error;
    }
  }
})