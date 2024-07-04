import AppsIcon from '@mui/icons-material/Apps';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import icon from '../../assets/icon.svg';

const itemsMenu = [
  {
    route: '/projects',
    description: 'Projetos',
    component: <AppsIcon className='text-white cursor-pointer' fontSize='medium' />
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
    <div className="bg-green-600 w-[76px] h-screen flex flex-col items-center text-center justify-between">
      <div className='w-full flex flex-col items-center'>
        <img src={icon} alt="Hectaremaps Plataform" />
        {
          itemsMenu.map((icon, index) => (
            <Link key={index} to={icon.route} >
              {icon.component}
            </Link>
          ))
        }
      </div>
      <div className='align-bottom mb-10 text-white font-poppins font-semibold flex flex-col'>
        <a href="">Olá {auth.user?.name}!</a>
        <button onClick={handleSignOut} className="cursor-pointer">Sair</button>{/** Colocar um icone de sair*/}
        <button onClick={handleConfig} className='cursor-pointer'>CONFIG</button>
      </div>
    </div>
  )
}

export default Menu