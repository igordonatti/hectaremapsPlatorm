import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { FlightInterface } from "../../types/Flights";
import ImageIcon from '@mui/icons-material/Image';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useFlight } from "../../hooks/api/useFlight";

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
  const flightApi = useFlight();
  const auth = useContext(AuthContext);
  
  const handleDelete = (flightId: number) => {
    if (auth.token) {
      const userConfirm = window.confirm('Tem certeza que deseja deletar este voo? Este procedimento é irreversível e apagará as imagens do voo!');
      
      if(userConfirm) flightApi.deleteFlight(flightId, auth.token);
    }
  }

  return ( 
    <div className="font-poppins text-green-600 h-12 mt-1 bg-gray-100 w-ful rounded-r-md flex items-center p-3 justify-between border-l-4 border-green-800">
      <span className="m-6">{converterFormatoData(flight.date)}</span>
      <div className="flex gap-2">
        <button className="bg-green-600 text-white w-1/2 rounded-md">
          <Link to={`/flights/${flight.id}/services`}>
            <span className="font-poppins p-2">Serviços</span>
          </Link>
        </button>
        <button className="bg-green-600 text-white rounded-lg">
          <Link to={`/flights/${flight.id}/images`} >
            <span className="p-3"><ImageIcon /></span>
          </Link>
        </button>
        <button onClick={() => handleDelete(flight.id)} className="w-12 h-9 bg-red-600 rounded-lg flex align-middle justify-center items-center text-white"><DeleteIcon /></button>
      </div>
    </div>
  )
}

export default FlightItem;