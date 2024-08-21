import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import { FileInput } from '../../components/FileInput/FileInput';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useImage } from '../../hooks/api/useImages';

export const NewImage = () => {
  const { flightId } = useParams();
  const [fileSelect, setFileSelected] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const imageApi = useImage();
  const user = useContext(AuthContext);

  const handleFileChange = (newFile: File | null) => {
    setFileSelected(newFile);
  }
  
  const handleSend = async () => {
    try {
      if(fileSelect !== null && flightId && user.token) {
        setIsLoading(true);
        await imageApi.postImage(fileSelect, flightId, user.token); 
        setIsLoading(false);
        navigate('/projects');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Erro no envio. Por favor, tente novamente!');
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
            {
              isLoading ? <div className=''>Enviando... Isso pode demorar alguns minutos</div> : null
            }
        </div>
      </div>
    </div>
  )
}
