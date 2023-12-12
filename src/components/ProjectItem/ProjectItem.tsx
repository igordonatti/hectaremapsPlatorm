import React from "react";
import { ProjectDTO } from "../../pages/Projects/Project.dto";

function truncateString(string: string, length: number) {
  if (string.length > length) {
    return string.slice(0, length - 3) + "...";
  } else {
    return string;
  }
}

const ProjectItem:React.FC<{project: ProjectDTO}> = ({ project }) => {
  return (
    <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 border rounded-md self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
      <span className="w-20">{project.id}</span>
      <span className="m-2 w-28">{truncateString(project.name, 13)}</span>
    </div>
  )
}

export default ProjectItem