import { ServiceInterface } from "../../types/Services";
import { format } from 'date-fns'

const complete: string = "COMPLETE";
const processing: string = "PROCESS";

const ServiceItem: React.FC<{service: ServiceInterface}> = ({ service }) => {
  return (
    <div className="text-gray-500 h-12 mt-1 bg-white w-full border-gray-500 border rounded-md self-center flex text-center items-center p-3 flex-direction-column justify-content-start">
      <span className="w-20">{service.id}</span>
      <span className="m-2 w-20">{format(service.created, 'dd/MM/yyyy')}</span>
      <span className={`m-2 w-24 font-semibold text-white ${service.status === complete ? "bg-green-200" : service.status === processing ? "bg-yellow-300" : "bg-red-600"}`}>{service.status}</span>
      <span className="m-2 w-28">{service.serviceType }</span>
    </div>
  )
}

export default ServiceItem