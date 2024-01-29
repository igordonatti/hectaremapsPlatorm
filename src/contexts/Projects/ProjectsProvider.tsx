import { useState } from "react"
import { ProjectsContext } from "./ProjectsContext"
import { Projects } from "../../types/Projects"
import { useApi } from "../../hooks/useApi";

export const ProjectsProvider = ({ children }: { children: JSX.Element}) => {
  const [project, setProject] = useState<Projects | null>(null);
  const api = useApi();
  
  const setProjectId = async (id: number) => {
    const data = await api.getProjectByUser(id);

    console.log(data);

    if (data) {
      setProject(data);
    }
  }

  return (
    <ProjectsContext.Provider value={{ project, setProjectId }}>
      {children}
    </ProjectsContext.Provider>
  )
}