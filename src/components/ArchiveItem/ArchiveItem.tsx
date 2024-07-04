import React from 'react'
import { ArchiveInterface } from '../../types/Archive'
import { MdFolderZip } from "react-icons/md";

const ArchiveItem:React.FC<{archive: ArchiveInterface}> = ({archive}) => {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div onClick={handleClick} className='cursor-pointer flex border-2 border-solid text-eden-900 gap-2 border-eden-900 h-12 rounded align-middle items-center p-2'>
      <div className=''>
        <MdFolderZip size={'1.5em'} />
      </div>
      <div>
        <span>{archive.filename}</span>
      </div>
    </div>
  )
}

export default ArchiveItem