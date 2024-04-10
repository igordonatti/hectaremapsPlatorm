import { User } from "../../types/User"

const Userdesc:React.FC<{user: User}> = ({user}) => {
  return (
    <div className="text-green-600 p-4 h-12 mt-1 space-x-10 bg-white w-full border-gray-600 border rounded-md flex items-center cursor-pointer">
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{user.role}</span>
    </div>
  )
}

export default Userdesc