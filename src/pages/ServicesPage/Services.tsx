import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import Navigator from "../../components/Navigator/Navigator"
import { ServiceDTO } from "../../components/serviceItem/Service.dto"
import ServiceItem from "../../components/serviceItem/ServiceItem"

const services: ServiceDTO[] = [
  {
    id: 0,
    name: "Fazenda Hectaremaps",
    createData: "14/03/02",
    status: "Complete",
    service: "Ortomosaico"
  },
  {
    id: 1,
    name: "Fazenda Feliz",
    createData: "14/03/02",
    status: "Não Iniciado",
    service: "Ortomosaico"
  },
  {
    id: 2,
    name: "Fazenda Feliz",
    createData: "14/03/02",
    status: "Processando",
    service: "Ortomosaico"
  },
  {
    id: 3,
    name: "Fazenda Feliz",
    createData: "14/03/02",
    status: "Complete",
    service: "Ortomosaico"
  },
  {
    id: 4,
    name: "Fazenda Feliz",
    createData: "14/03/02",
    status: "Complete",
    service: "Ortomosaico"
  },
] as ServiceDTO[];

const Services = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Serviços</span>
            <Link to={'/newService'} >
              <div className="flex items-center justify-center text-4xl bg-green-800 text-white rounded-full ml-auto cursor-pointer h-8 w-8">
                <span className="mb-2">+</span>
              </div>
            </Link>
          </div>
          <Navigator />
          <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
            <span className="w-20">ID</span>
            <span className="m-2 w-28">Projeto</span>
            <span className="m-2 w-20">Created</span>
            <span className="m-2 w-20">Status</span>
            <span className="m-6 w-20">Serviço</span>
          </div>

          {
            // Transformar esse trecho de codigo acima em um componente de Descrição
            // Posteriormente poderia ser tbm de ordenação.
          }

          {
            services.map((item, index) => {
              return <span key={index}><ServiceItem service={item}/></span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services