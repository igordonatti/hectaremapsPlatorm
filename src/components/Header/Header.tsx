import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <div className='w-full z-10 relative top-0 left-0 shadow-md'>
          <div className='md:px-10 z-50 py-4 px-7 md:flex justify-between items-center bg-white-100'>
            {/* logo here */}
            <div className='flex z-50 text-2x1 cursor-pointer items-center gap-2'>
              <span className="font-bold text-green-800">Hectaremaps</span>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 z-50 absolute md:static bg-white-100 left-0 w-full md:w-auto md:pl-0`}>
              <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <a className="text-green-800">Olá, {auth.user?.name}</a>
                <a className="cursor-pointer text-green-800">    Sair</a>{/** Colocar um icone de sair*/}
              </li>
            </ul>
          </div>
      </div>
  )
}

export default Header