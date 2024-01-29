import { createContext } from "react";
import { Projects } from "../../types/Projects";

export type ProjectsContextType = {
  project: Projects | null;
  setProjectId: (id: number) => void;
}

export const ProjectsContext = createContext<ProjectsContextType>(null!);