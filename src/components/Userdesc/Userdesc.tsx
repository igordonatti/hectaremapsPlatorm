import { User } from "../../types/User"

const Userdesc:React.FC<{user: User}> = ({user}) => {
  return (
    <div className="text-green-600 h-12 mt-1 bg-white w-full border-gray-600 border rounded-md flex items-center p-3 cursor-pointer justify-around hover:outline-green-500 hover:ring-0">
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{user.role}</span>
    </div>
  )
}

export default Userdesc