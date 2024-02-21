import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
import { useContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { FlightInterface } from "../../types/Flights";
import { ProjectsType } from "../../types/Projects";
import FlightItem from "../../components/FlightItem/FlightItem";

export const Flights = () => {
  const { projectId } = useParams();
  const api = useApi();
  const auth = useContext(AuthContext);
  const [flights, setFlights] = useState<FlightInterface[]>();

  const handleNewFlight = async () => {
    try {
      if(auth.token && projectId){
        const response = await api.createFlight(+projectId, auth.token);
        setFlights(prevFlights => prevFlights ? [...prevFlights, response] : [response]);
      }
    } catch(error) {
      console.log("Error ao criar voo: ", error);
    }
  }

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        if (projectId && auth.token){ 
          const response: ProjectsType = await api.getProjectById(parseInt(projectId), auth.token)
          setFlights(response.flights)
        }
      } catch (error) {
        console.log("Erro ao buscar voos: ", error);
      }
    }

    fetchFlights();
  }, [projectId, auth.token])

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Voos</span>
            <div onClick={handleNewFlight} className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
              <span className="mb-2">+</span>
            </div>
          </div>
          <div className="mt-1 bg-white w-full p-3"></div>
          {
            flights?.map((item, index) => {
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
