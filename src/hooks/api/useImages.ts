import { api } from "./provider";

export const useImage = () => ({
  postImage: async (file: File, idFlight: string, token: string) => {
    const formData = new FormData();
    formData.append('image', file);

    const url = `/images/upload?idFlight=${idFlight}`;

    try {
      const response = await api.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      throw error; // Propaga o erro para que quem chama este método possa tratá-lo
    }
  },

  getImagesFromFlightID: async (idFlight: number, token: string) => {
    try {
      const response = await api.get(`/images/imagesFromFlight/${idFlight}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
        throw new Error("Erro ao recuperar as imagens");
    }
  },

  dowloadArchive: async () => {}
})