import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"
import { Link } from "react-router-dom"
import Userdesc from "../../components/Userdesc/Userdesc"

const Users = () => {
  const [users, setUsers] = useState([]);
  const auth = useContext(AuthContext);
  const api = useApi();

  useEffect(() => {
    const getUsers = async () => {
      if(auth.token && auth.user) {
        const usersFromApi = await api.getAllUsers(auth.token);
        setUsers(usersFromApi);
      }
    }

    getUsers();
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 w-full ml-8 mr-6">
          <span className="text-4xl text-green-800 font-semibold font-poppins"><Link to={'/admin'}>Administração</Link> {">"} Usuários</span>
          <div className="mt-4">
            {
              users.map((item, index) => {
                return <Userdesc key={index} user={item} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users