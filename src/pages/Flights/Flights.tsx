import { useParams } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import FlightItem from "../../components/FlightItem/FlightItem";
import { useFlight } from "../../hooks/api/useFlight";

export const Flights = () => {
  const { projectId } = useParams();
  const flightApi = useFlight();
  const auth = useContext(AuthContext);
  const [flights, setFlights] = useState([]);

  const handleNewFlight = async () => {
    try {
      if(auth.token && projectId){
        await flightApi.createFlight(+projectId, auth.token);
      }
    } catch(error) {
      console.log("Error ao criar voo: ", error);
    }
  }

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        if (projectId && auth.token){ 
          const response = await flightApi.getFlightsByIdProject(+projectId, auth.token)
          setFlights(response)
        }
      } catch (error) {
        console.log("Erro ao buscar voos: ", error);
      }
    }

    fetchFlights();
  })

  return (
    <div className="h-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-[90%] mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Voos</span>
            <div onClick={handleNewFlight} className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
              <span className="mb-2">+</span>
            </div>
          </div>
          <div className="mt-6 bg-white w-full"></div>
          {
            flights.map((item, index) => {
              return (
                <span key={index}><FlightItem flight={item}/></span>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
