import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { FlightInterface } from "../../types/Flights";

const FlightItem:React.FC<{flight: FlightInterface}> = ({ flight }) => {
  return ( 
    <div className="text-green-600 h-12 mt-1 bg-white w-full border-gray-600 border rounded-md flex items-center p-3 cursor-pointer justify-between hover:bg-gray-300">
      <span className="m-6">{flight.date}</span>
      <button className="w-8 h-8 bg-red-600 rounded-full flex align-middle justify-center items-center text-white"><DeleteIcon /></button>
    </div>
  )
}

export default FlightItem;