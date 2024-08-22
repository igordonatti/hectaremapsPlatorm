import { User } from "../../types/User"

const Userdesc:React.FC<{user: User}> = ({user}) => {
  return (
    <div className="p-3 font-poppins text-green-600 justify-between h-12 mt-1 bg-gray-100 rounded-r-lg flex items-center border-l-4 border-green-800">
      <div className="flex gap-4">
        <span>{user.id}</span>
        <span>{user.name}</span>
        <span>{user.role}</span>
      </div>
      <div>
        <button className="bg-green-800 text-white rounded-md p-2">Projetos do Usuario</button>
      </div>
    </div>
  )
}

export default Userdesc