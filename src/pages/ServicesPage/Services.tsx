import { Link, useParams } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
import ServiceItem from "../../components/serviceItem/ServiceItem"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"
import { ServiceInterface } from "../../types/Services"

const Services = () => {
  const { flightId } = useParams();
  const [flightServices, setFlighServices] = useState([]);
  const auth = useContext(AuthContext);
  const api = useApi();

  useEffect(() => {
    const getFlightServices = async () => {
      if(auth.token && auth.user && flightId) {
        const data = await api.getServicesByFlight(+flightId, auth.token);
        setFlighServices(data);
        console.log(flightServices);
      }
    }

    getFlightServices();
  }, [auth])

  return (
    <div className="h-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Serviços</span>
            <Link to={`/${flightId}/newService`} >
              <div className="flex items-center justify-center text-4xl bg-green-800 text-white rounded-full ml-auto cursor-pointer h-8 w-8">
                <span className="mb-2">+</span>
              </div>
            </Link>
          </div>
          {/* <Navigator /> */}
          <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
            <span className="w-20">ID</span>
            <span className="m-2 w-20">Created</span>
            <span className="m-2 w-20">Status</span>
            <span className="m-6 w-20">Serviço</span>
          </div>

          {
            // Transformar esse trecho de codigo acima em um componente de Descrição
            // Posteriormente poderia ser tbm de ordenação.
          }

          {
            flightServices.map((service: ServiceInterface, index) => {
              return <span key={index}><ServiceItem service={service}/></span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services