import { useState } from 'react'
import { useApi } from '../../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Menu from '../../components/Menu/Menu';
import { FileInput } from '../../components/FileInput/FileInput';
import Button from '../../components/Button/Button';

export const NewImage = () => {
  const { flightId } = useParams();
  const [fileSelect, setFileSelected] = useState<File | null>(null);
  const api = useApi();
  const navigate = useNavigate();

  const handleFileChange = (newFile: File | null) => {
    setFileSelected(newFile);
  }
  
  const handleSend = async () => {
    try {
      if(fileSelect !== null && flightId) {
        console.log(fileSelect)

        await api.postImage(fileSelect, flightId); //preciso terminar igor continue daqui
        toast.success("Envio bem sucedido!");
        navigate("/home");
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
          <span className="text-4xl text-green-800 font-poppins font-semibold">Carregar Imagens</span>
          <div className="mt-4"></div>
          <FileInput onFileChange={handleFileChange} />
          <Button onClick={handleSend} placeholder="Enviar"/>
        </div>
      </div>
    </div>
  )
}
