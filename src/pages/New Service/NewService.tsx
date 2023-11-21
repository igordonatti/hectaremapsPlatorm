import { useState } from "react"
import Button from "../../components/Button/Button"
import { FileInput } from "../../components/FileInput/FileInput"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import Menu from "../../components/Menu/Menu"
import { useApi } from "../../hooks/useApi"

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
          <div className="flex w-full mt-7 space-x-6">
            <Input placeholder="Nome do Serviço" type="select" />
          </div>
          <div className="mt-4"></div>
          <FileInput onFileChange={handleFileChange} />
          <Button onClick={handleSend} placeholder="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default NewService