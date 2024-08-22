import AppsIcon from '@mui/icons-material/Apps';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const itemsMenu = [
  {
    route: '/projects',
    description: 'Projetos',
    component: <AppsIcon className='text-green-800 cursor-pointer' fontSize='medium' />
  }, 
]

const Menu = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.signOut();
    navigate('/signIn');
  }

  const handleConfig = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/admin')
  }

  return (
    <div className="shadow-inner text-green-800 font-poppins bg-gray-100 w-[160px] min-h-screen flex flex-col items-center text-center justify-between">
      <div className='w-full flex flex-col items-center gap-4'>
        <div className='h-16 text-white w-full bg-green-800 flex justify-center align-middle items-center text-lg'>
          Hectaremaps
        </div>
        {
          itemsMenu.map((icon, index) => (
            <Link key={index} to={icon.route} className='text-green-800 font-semibold flex items-center gap-2' >
              {icon.component} {icon.description}
            </Link>
          ))
        }
      </div>
      <div className='align-bottom mb-10 font-semibold flex flex-col'>
        <a>Olá,  {auth.user?.name}!</a>
        <button onClick={handleSignOut} className="cursor-pointer">Sair</button>{/** Colocar um icone de sair*/}
        <button onClick={handleConfig} className='cursor-pointer'>CONFIG</button>
      </div>
    </div>
  )
}

export default Menu