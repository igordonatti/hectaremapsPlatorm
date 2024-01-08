import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"
import ProjectItem from "../../components/ProjectItem/ProjectItem"

const Projects = () => {
  const [userProjects, setUserProjects] = useState([]);
  const auth = useContext(AuthContext);
  const api = useApi();

  useEffect(() => {
    const getUserProjects = async () => {
      if(auth.token && auth.user) {
        const userProjects = await api.getUserProjects(auth.user.id, auth.token);
        setUserProjects(userProjects);
      }
    }

    getUserProjects();
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Projetos</span>
            <div className="flex items-center justify-center text-4xl bg-green-800 text-white rounded-full ml-auto cursor-pointer h-8 w-8">
              <span className="mb-2">+</span>
            </div>
          </div>
          <div className="mt-1 bg-white w-full p-3"></div>
          {
            userProjects.map((item, index) => {
              return <span key={index}><ProjectItem project={item}/></span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects