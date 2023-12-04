import { useState } from "react"
import Button from "../../components/Button/Button"
import { FileInput } from "../../components/FileInput/FileInput"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { useApi } from "../../hooks/useApi"
import Select from 'react-select';

const servicesOptions = [
  { value: 'ortomosaico', label: 'Ortomosaico' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const projectsOptions = [
  { value: 'fazenda feliz', label: "Fazenda Feliz"},
  { value: 'fazenda legal', label: "Fazenda Legal"},
  { value: 'fazenda america', label: "Fazenda America"},
]

const NewService = () => {
  const [fileSelect, setFileSelected] = useState<File | null>(null);
  const api = useApi();


  const handleFileChange = (newFile: File | null) => {
    setFileSelected(newFile);
  }
  
  const handleSend = () => {
    if(fileSelect !== null) api.postImage(fileSelect)
  }

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Serviço</span>
          <Select className="mt-2 w-[80%]" placeholder="Selecione o(s) serviço(s)" options={servicesOptions} isMulti />
          <Select className="mt-2 w-[80%]" placeholder="Selecione o projeto" options={projectsOptions} />
          <div className="mt-4"></div>
          <FileInput onFileChange={handleFileChange} />
          <Button onClick={handleSend} placeholder="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default NewService