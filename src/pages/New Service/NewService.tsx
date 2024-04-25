import { useNavigate, useParams } from 'react-router-dom';
import Button from "../../components/Button/Button"
import Menu from "../../components/Menu/Menu"
import Select, { SingleValue } from 'react-select';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { CreateServiceDTO } from './dto/createService.dto';
import { useService } from '../../hooks/api/useService';

const servicesOptions = [
  { value: 'ORTOMOSAICO', label: 'Ortomosaico' },
  { value: 'MAPAGERAL', label: 'MapaGeral' },
  { value: 'MAPA2D', label: 'MapaDoisD' }
]

const NewService = () => {
  const navigate = useNavigate();
  const serviceApi = useService();
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState<CreateServiceDTO>({
    name: "",
    flightId: null,
  })
  const { flightId } = useParams();
  
  const handleChange = (event: SingleValue<{ value: string; label: string; }>) => {
    if(flightId) {
      setFormData(
        {
          name: event?.value ? event.value : '',
          flightId: +flightId,
        }
      )
    }
  }
  
  const handleSend = async () => {
    try {
      if(flightId && auth.token){
        const response = serviceApi.createServiceByFlighId(formData, auth.token);
        
        navigate(`/flights/${flightId}/services`);
        return response;
      }
    } catch (error) {
      console.error("Erro ao solicitar novo serviço");
    }
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Serviço</span>
          <Select onChange={(event) => handleChange(event)} className="mt-2 w-[80%]" placeholder="Selecione o(s) serviço(s)" options={servicesOptions} />
          <div className="mt-4"></div>
          <Button onClick={handleSend} placeholder="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default NewService