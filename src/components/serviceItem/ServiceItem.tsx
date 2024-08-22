import { ServiceInterface } from "../../types/Services";
import { format } from 'date-fns';

const complete: string = "COMPLETE";
const processing: string = "PROCESS";

const ServiceItem: React.FC<{service: ServiceInterface}> = ({ service }) => {
  return (
    <div className="mt-1 border-l-4 border-green-800 text-gray-500 h-12 bg-gray-100 rounded-r-lg font-poppins grid grid-flow-col grid-cols-4 text-center items-center">
      <span>{service.id}</span>
      <span>{format(service.created, 'dd/MM/yyyy')}</span>
      <span className={`font-semibold text-white p-1 rounded-sm ${service.status === complete ? "bg-green-200" : service.status === processing ? "bg-yellow-300" : "bg-red-600"}`}>{service.status}</span>
      <span>{service.serviceType }</span>
    </div>
  )
}

export default ServiceItem