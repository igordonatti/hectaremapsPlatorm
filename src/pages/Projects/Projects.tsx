import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"

const Projects = () => {
  const [userProjects, setUserProjects] = useState([]);
  const auth = useContext(AuthContext);
  const api = useApi();

  useEffect(() => {
    const getUserProjects = async () => {
      if(auth.token && auth.user) {
        const userProjects = await api.getUserProjects(auth.user.id, auth.token);
        console.log(userProjects);
        setUserProjects(userProjects);
      }
    }

    getUserProjects();
    console.log(userProjects);
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Projetos</span>
          <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
            <span className="w-20">ID</span>
            <span className="m-2 w-28">Nome</span>
          </div>
          {
            /*
            userProjects.map((item, index) => {
              return <span key={index}><ProjectItem project={item}/></span>
            })
            */
          }
        </div>
      </div>
    </div>
  )
}

export default Projects