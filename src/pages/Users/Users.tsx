import { useContext, useEffect, useState } from "react"
import Menu from "../../components/Menu/Menu"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Link } from "react-router-dom"
import Userdesc from "../../components/Userdesc/Userdesc"
import { useUser } from "../../hooks/api/useUser"

const Users = () => {
  const [users, setUsers] = useState([]);
  const auth = useContext(AuthContext);
  const userApi = useUser();

  useEffect(() => {
    const getUsers = async () => {
      if(auth.token && auth.user) {
        const usersFromApi = await userApi.getAllUsers(auth.token);
        setUsers(usersFromApi);
      }
    }

    getUsers();
  }, []);

  return (
    <div className="h-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 w-[90%] ml-8 mr-6">
          <span className="text-4xl text-green-800 font-semibold font-poppins"><Link to={'/admin'}>Administração</Link> {">"} Usuários</span>
          <div className="mt-6">
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