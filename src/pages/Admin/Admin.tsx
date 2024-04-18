import { Link } from "react-router-dom"
import Menu from "../../components/Menu/Menu"

const Admin = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] w-full mt-2 ml-8 mr-6">
          <span className="text-4xl text-green-800 font-semibold font-poppins">Administração</span>
          <div className="grid grid-rows gap-2 mt-4">
            <Link to={'/users'}>
              <button className="w-[200px] h-[44px] bg-green-800 text-white font-poppins font-semibold rounded-md" placeholder="Usuários">Usuarios</button>
            </Link>
            <button className="w-[200px] h-[44px] bg-green-800 text-white font-poppins font-semibold rounded-md" placeholder="Usuários">Planos</button>
            <button className="w-[200px] h-[44px] bg-green-800 text-white font-poppins font-semibold rounded-md" placeholder="Usuários">Serviços</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin