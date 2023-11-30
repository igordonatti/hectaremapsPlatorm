import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestoreIcon from '@mui/icons-material/Restore';
import { Link } from 'react-router-dom';

const classIcon = 'ml-2 text-green-800 cursor-pointer mt-1';

const itemsMenu = [
  {
    route: '/home',
    description: 'Início',
    component: <HomeIcon className={classIcon} fontSize='medium' />
  },
  {
    route: '/services',
    description: 'Serviços',
    component: <PlaylistAddCheckIcon className={classIcon}  fontSize='medium' />
  },
  {
    route: '/home',
    description: 'Contratar Plano',
    component: <ShoppingCartIcon className={classIcon}  fontSize='medium' />
  }, 
  {
    route: '/home',
    description: 'Histórico de Planos',
    component: <RestoreIcon className={classIcon}  fontSize='medium' />
  }
]

const Menu = () => {
  return (
    <div className="bg-white h-screen w-[320px] flex flex-col items-center border-r-2 border-r-green-800">
      {
        itemsMenu.map((icon, index) => (
          <div key={index} className='flex w-full items-center content-center p-2 ml-1'>
            <Link to={icon.route} >
              {icon.component}
              <span className='text-green-800 text-lg cursor-pointer ml-2 font-poppins mt-[4px]'>{icon.description}</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Menu