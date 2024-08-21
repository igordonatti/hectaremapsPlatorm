import { Link, useParams } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
import ServiceItem from "../../components/serviceItem/ServiceItem"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ServiceInterface } from "../../types/Services"
import { useService } from "../../hooks/api/useService"

const Services = () => {
  const { flightId } = useParams();
  const [flightServices, setFlighServices] = useState([]);
  const auth = useContext(AuthContext);
  const serviceApi = useService();

  useEffect(() => {
    const getFlightServices = async () => {
      if(auth.token && auth.user && flightId) {
        const data = await serviceApi.getServicesByFlight(+flightId, auth.token);
        setFlighServices(data);
        console.log(flightServices);
      }
    }

    getFlightServices();
  }, [])

  return (
    <div className="h-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-[90%] mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Serviços</span>
            <Link to={`/${flightId}/newService`} >
              <div className="flex items-center justify-center text-4xl bg-green-800 text-white rounded-full ml-auto cursor-pointer h-8 w-8">
                <span className="mb-2">+</span>
              </div>
            </Link>
          </div>
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