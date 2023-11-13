import { FileInput } from "../../components/FileInput/FileInput"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import Menu from "../../components/Menu/Menu"

const NewService = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Serviço</span>
          <div className="flex w-full mt-7 space-x-6">
            <Input placeholder="Nome do Serviço" type="select" />
            <Input placeholder="Selecione os Serviços" type="select" options={['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5', 'Opção 6']} />
          </div>
          <div className="mt-4"></div>
          <FileInput />
        </div>
      </div>
    </div>
  )
}

export default NewService