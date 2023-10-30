import React from 'react';

interface InputProps {
  backgroundColor?: string;
  placeholder: string;
  height?: string;
  width?: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({height, width, type, placeholder, onChange}) => {
  const InputClasses = `
    custom-input
    ${height ? `h-[${height}px]` : 'h-[68px]'} 
    bg-gray-300
    ${width ? `w-[${width}px]` : 'w-[376px]'}
    border-none
    focus:outline-none 
    focus:ring-0
    pl-[32px]
    placeholder:text-black
    placeholder:font-semibold
  `
  
  return (
    <div className='relative flex items-center'>
      <div className="absolute inset-y-0 left-0 flex">
        <div className="w-2 h-full bg-green-800"></div>
      </div>
      <input placeholder={placeholder} className={InputClasses} type={type} onChange={onChange}/>
    </div>
  )
}

export default Input