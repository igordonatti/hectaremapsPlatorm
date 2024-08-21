import React from 'react'
import { ArchiveInterface } from '../../types/Archive'
import { MdFolderZip } from "react-icons/md";

const ArchiveItem:React.FC<{archive: ArchiveInterface}> = ({archive}) => {

  const handleClick = () => {
    console.log('Fazer Dowload do Arquivo')
  }

  return (
    <div onClick={handleClick} className='cursor-pointer flex bg-gray-100 rounded-r-lg h-12 items-center border-l-4 border-l-green-800 gap-2 p-2 font-poppins'>
        <MdFolderZip size={'1.5em'} /> 
        <span>{archive.filename}</span>
    </div>
  )
}

export default ArchiveItem