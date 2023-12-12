import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AppsIcon from '@mui/icons-material/Apps';
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
    route: '/projects',
    description: 'Projetos',
    component: <AppsIcon className={classIcon}  fontSize='medium' />
  }, 
]

const Menu = () => {
  return (
    <div className="bg-white h-screen w-[320px] flex flex-col items-center border-r-2 border-r-green-800">
      {
        itemsMenu.map((icon, index) => (
          <div key={index} className='flex w-full items-center content-center p-2 ml-1'>
            <Link to={icon.route} >
              <div className='flex align-middle justify-center items-center'>
                {icon.component}
                <span className='text-green-800 text-lg cursor-pointer ml-2 font-poppins'>{icon.description}</span>
              </div>           
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Menu