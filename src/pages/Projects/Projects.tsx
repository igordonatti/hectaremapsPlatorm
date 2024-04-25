import { useContext, useEffect, useState } from "react"
import Menu from "../../components/Menu/Menu"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import ProjectItem from "../../components/ProjectItem/ProjectItem"
import { Link } from "react-router-dom"
import { ProjectsType } from "../../types/Projects"
import { useProject } from "../../hooks/api/useProject"

const Projects = () => {
  const [userProjects, setUserProjects] = useState([]);
  const auth = useContext(AuthContext);
  const project = useProject();

  useEffect(() => {
    const getUserProjects = async () => {
      if(auth.token && auth.user) {
        const data = await project.getUserProjects(auth.user.id, auth.token);
        setUserProjects(data);
      }
    }

    getUserProjects();
  }, [userProjects]);
  
  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] w-full mt-2 ml-8 mr-6">
          <div className="flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Projetos</span>
            <Link to={'/newProject'}>
              <div className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
                <span className="mb-2">+</span>
              </div>
            </Link>
          </div>
          <div className="mt-1 bg-white p-3"></div>
          {
            userProjects.map((project: ProjectsType, index) => {
              return (
                <Link key={index} to={`/projects/${project.id}/flights`}>
                  <span key={index}><ProjectItem project={project}/></span>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects