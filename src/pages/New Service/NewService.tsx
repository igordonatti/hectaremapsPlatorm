import { useParams } from 'react-router-dom';
import Button from "../../components/Button/Button"
import Menu from "../../components/Menu/Menu"
import Select from 'react-select';
import { toast } from "react-toastify";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { CreateServiceDTO } from './dto/createService.dto';
import { useService } from '../../hooks/api/useService';

const servicesOptions = [
  { value: 'ortomosaico', label: 'Ortomosaico' },
  { value: 'mapa geral', label: 'MapaGeral' },
  { value: 'mapa 2d', label: 'MapaDoisD' }
]

const NewService = () => {
  const serviceApi = useService();
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState<CreateServiceDTO>({
    name: "",
    flightId: null,
  })
  const { flightId } = useParams();
  
  const handleChange = () => {
    if(flightId) {
      setFormData(
        {
          name: 'ORTOMOSAICO',
          flightId: +flightId,
        }
      )
    }

    console.log(formData);
  }
  
  const handleSend = async () => {
    try {
      if(flightId && auth.token){
        const response = serviceApi.createServiceByFlighId(formData, auth.token)
        
        return response;
      }
    } catch (error) {
      toast.error('Erro no envio. Por favor, tente novamente!');
    }
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Serviço</span>
          <Select onChange={handleChange} className="mt-2 w-[80%]" placeholder="Selecione o(s) serviço(s)" options={servicesOptions} />
          <div className="mt-4"></div>
          <Button onClick={handleSend} placeholder="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default NewService