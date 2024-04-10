import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const classIcon = 'ml-2 text-white cursor-pointer';

const itemsMenu = [
  {
    route: '/home',
    description: 'Início',
    component: <HomeIcon className={classIcon} fontSize='medium' />
  },
  {
    route: '/projects',
    description: 'Projetos',
    component: <AppsIcon className={classIcon}  fontSize='medium' />
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

  return (
    <div className="bg-green-600 w-[220px] h-screen flex flex-col items-center border-r-2 justify-between">
      <div className='w-full flex flex-col items-center'>
        <span className='text-white font-poppins mt-4 mb-4 font-bold text-lg'>Hectaremaps</span>
        {
          itemsMenu.map((icon, index) => (
            <div key={index} className='flex w-full p-2 ml-1'>
              <Link to={icon.route} >
                <div className='flex justify-center items-center'>
                  {icon.component}
                  <span className='text-white text-lg cursor-pointer ml-2 font-poppins'>{icon.description}</span>
                </div>           
              </Link>
            </div>
          ))
        }
      </div>
      <div className='align-bottom mb-10 text-white font-poppins font-semibold flex flex-col'>
        <a href="">Olá {auth.user?.name}!</a>
        <button onClick={handleSignOut} className="cursor-pointer">Sair</button>{/** Colocar um icone de sair*/}
        <button className='cursor-pointer'>CONFIG</button>
      </div>
    </div>
  )
}

export default Menu