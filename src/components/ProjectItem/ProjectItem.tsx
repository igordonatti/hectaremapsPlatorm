import React from "react";
import { ProjectDTO } from "../../pages/Projects/Project.dto";

const ProjectItem:React.FC<{project: ProjectDTO}> = ({ project }) => {
  return ( 
    <button className="text-green-600 h-12 mt-1 bg-white w-full border-gray-600 border rounded-md self-center flex text-center items-center p-3 flex-direction-column justify-content-start cursor-pointer hover:bg-green-300">
      <span className="m-6">{project.name}</span>
    </button>
  )
}

export default ProjectItem