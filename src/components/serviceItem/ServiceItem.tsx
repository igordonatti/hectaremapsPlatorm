import { ServiceDTO } from "./Service.dto"

function truncateString(string: string, length: number) {
  if (string.length > length) {
    return string.slice(0, length - 3) + "...";
  } else {
    return string;
  }
}

const complete: string = "Complete";
const processando: string = "Processando";

const ServiceItem: React.FC<{service: ServiceDTO}> = ({ service }) => {
  return (
    <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 border rounded-md self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
      <span className="w-20">{service.id}</span>
      <span className="m-2 w-28">{truncateString(service.name, 15)}</span>
      <span className="m-2 w-20">{service.createData}</span>
      <span className={`m-2 w-24 font-semibold text-white ${service.status === complete ? "bg-green-200" : service.status === processando ? "bg-yellow-300" : "bg-red-600"}`}>{service.status}</span>
      <span className="m-2 w-20">{service.service}</span>
    </div>
  )
}

export default ServiceItem