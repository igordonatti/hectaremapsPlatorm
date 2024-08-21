import React from 'react';

interface InputProps {
  backgroundColor?: string;
  placeholder: string;
  height?: number;
  width?: number;
  type: string;
  options?: string[]; // Adicione um array de opções
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ height, width, type, placeholder, onChange }) => {
  const InputClasses = `
    custom-input
    ${height ? `h-[${height}px]` : 'h-[68px]'} 
    bg-white
    border
    border-black
    ${width ? `w-[${width}px]` : 'w-[376px]'}
    focus:outline-green-500 
    focus:ring-0
    pl-[32px]
    placeholder:text-black
    placeholder:font-semibold
  `

  return (
      <input
        placeholder={placeholder}
        className={InputClasses}
        type={type}
        onChange={onChange}
      />
  );
}

export default Input