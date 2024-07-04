import { CreateServiceDTO } from "../../pages/New Service/dto/createService.dto";
import { api } from "./provider";

export const useService = () => ({
  getServicesByFlight: async (flightId: number, token: string) => {
    try { 
      const response = await api.get(`/service/${flightId}`, {
        headers: {Authorization: `Bearer ${token}`}
      });

      console.log(response)

      return response.data;
    } catch (error) {
      console.error('Erro ao obter serviços deste voo: ', error);
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
  },
})