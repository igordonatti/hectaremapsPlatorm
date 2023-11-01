const Header = () => {
  return (
    <div className='w-full fixed top-0 left-0 shadow-md'>
          <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white-100'>
            {/* logo here */}
            <div className='flex text-2x1 cursor-pointer items-center gap-2'>
              <span className="font-bold text-green-800">Hectaremaps</span>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9ease-in`}>
              <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <a className="text-green-800">Olá, Igor Donatti!</a>
                <a className="cursor-pointer text-green-800">    Sair</a>{/** Colocar um icone de sair*/}
              </li>
            </ul>
          </div>
      </div>
  )
}

export default Header