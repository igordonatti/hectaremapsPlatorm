import { FlightInterface } from "./Flights";

export interface ProjectsType {
  id: number;
  name: string;
  userId: number;
  flights: Array<FlightInterface>;
}