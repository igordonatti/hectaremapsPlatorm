import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProjectsType } from "../../types/Projects";
import { useProject } from "../../hooks/api/useProject";

const ProjectItem:React.FC<{project: ProjectsType}> = ({ project }) => {
  const auth = useContext(AuthContext);
  const projectApi = useProject();

  const handleDelect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const confirmClient = confirm(`Você reamente deseja excluir o Projeto ${project.name}?`)

    if(confirmClient) {
      try {
        if(auth.user && auth.token) {
          const response = await projectApi.deleteProject(project.id, auth.user.id, auth.token);
          return response;
        }
      } catch (error) {
        console.log('Erro ao solicitar deleção: ', error);
        throw error;
      }
    }
  }
  
  return ( 
    <div className="text-green-600 h-12 font-poppins mt-1 bg-gray-100 rounded-r-lg flex items-center p-3 cursor-pointer justify-between hover:bg-gray-300 border-l-4 border-l-green-800">
      <span className="m-6">{project.name}</span>
      <button onClick={handleDelect} className="w-8 h-8 bg-red-600 rounded-full flex align-middle justify-center items-center text-white"><DeleteIcon /></button>
    </div>
  )
}

export default ProjectItem