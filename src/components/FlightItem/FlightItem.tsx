import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { FlightInterface } from "../../types/Flights";
import ImageIcon from '@mui/icons-material/Image';
import { Link } from "react-router-dom";

function converterFormatoData(data: string): string {
  const dataObj = new Date(data);
  const dia = dataObj.getDate();
  const mes = dataObj.getMonth() + 1; // Lembrando que os meses são indexados de 0 a 11
  const ano = dataObj.getFullYear();

  // Formatando para o formato dd/mm/aaaa
  const diaFormatado = dia < 10 ? '0' + dia : dia.toString();
  const mesFormatado = mes < 10 ? '0' + mes : mes.toString();

  return `${diaFormatado}/${mesFormatado}/${ano}`;
}

const FlightItem:React.FC<{flight: FlightInterface}> = ({ flight }) => {
  return ( 
    <div className="text-green-600 h-12 mt-1 cursor-none bg-white w-full border-gray-600 border rounded-md flex items-center p-3 justify-between">
      <span className="m-6">{converterFormatoData(flight.date)}</span>
      <div className="flex">
        <button className="mr-6 bg-green-600 text-white w-1/2 rounded-md">
          <Link to={`/flights/${flight.id}/services`}>
            <span className="font-poppins p-2">Serviços</span>
          </Link>
        </button>
        <button className="mr-6 bg-green-600 text-white w-1/2 rounded-full">
          <Link to={`/flights/${flight.id}/images`} >
            <span className="font-poppins p-3"><ImageIcon /></span>
          </Link>
        </button>
        <button className="w-8 h-8 bg-red-600 rounded-full flex align-middle justify-center items-center text-white"><DeleteIcon /></button>
      </div>
    </div>
  )
}

export default FlightItem;