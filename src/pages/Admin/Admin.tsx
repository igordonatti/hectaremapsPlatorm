import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"

const Admin = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 mr-6">
          <span className="text-4xl text-green-800 font-semibold font-poppins">Administração</span>
          <div className="grid grid-rows-2 grid-flow-col gap-2 mt-4">
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