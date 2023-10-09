import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestoreIcon from '@mui/icons-material/Restore';

const classIcon = 'text-white cursor-pointer mt-1';

const itemsMenu = [
  {
    description: 'Início',
    component: <HomeIcon className={classIcon} fontSize='medium' />
  },
  {
    description: 'Serviços',
    component: <PlaylistAddCheckIcon className={classIcon}  fontSize='medium' />
  },
  {
    description: 'Contratar Plano',
    component: <ShoppingCartIcon className={classIcon}  fontSize='medium' />
  }, 
  {
    description: 'Histórico de Planos',
    component: <RestoreIcon className={classIcon}  fontSize='medium' />
  }
]

const Menu = () => {
  return (
    <div className="self-center bg-green-800 h-[95%] ml-8 w-[320px] rounded-tl-lg rounded-bl-lg flex flex-col items-center">
      <AccountCircleIcon className='text-white mt-2 mb-2]' fontSize='large' />
      <span className='text-lg text-white mb-2 font-poppins'>Menu</span>
      <div className='h-[2px] w-11/12 border-solid border-white bg-white rounded'></div>
      <span className='mt-2'></span>
      {
        itemsMenu.map((icon, index) => (
          <div key={index} className='flex w-full items-center content-center p-2 ml-1'>
            {icon.component}
            <span className='text-white text-base cursor-pointer ml-2 font-poppins mt-[4px]'>{icon.description}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Menu