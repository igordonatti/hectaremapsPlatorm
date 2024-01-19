import React, { useContext } from "react";
import { ProjectDTO } from "../../pages/Projects/Project.dto";
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";

const ProjectItem:React.FC<{project: ProjectDTO}> = ({ project }) => {
  const auth = useContext(AuthContext);
  const api = useApi();

  const handleDelect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const confirmClient = confirm(`Você reamente deseja excluir o Projeto ${project.name}`)

    if(confirmClient) {
      try {
        if(auth.user && auth.token) {
          const response = await api.deleteProject(project.id, auth.user?.id, auth.token);
          return response;
        }
      } catch (error) {
        console.log('Erro ao solicitar deleção: ', error);
        throw error;
      }
    }
  }

  return ( 
    <div className="text-green-600 h-12 mt-1 bg-white w-full border-gray-600 border rounded-md flex items-center p-3 cursor-pointer justify-between hover:bg-gray-300">
      <span className="m-6">{project.name}</span>
      <button onClick={handleDelect} className="w-8 h-8 bg-red-600 rounded-full flex align-middle justify-center items-center text-white"><DeleteIcon /></button>
    </div>
  )
}

export default ProjectItem