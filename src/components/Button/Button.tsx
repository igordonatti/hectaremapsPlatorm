import React from "react";

interface ButtonPropos {
  backgroundColor?: string;
  placeholder: string;
  height?: string;
  width?: string;
  textColor?: string;
  hover?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonPropos> = ({placeholder, height, width, backgroundColor, textColor, hover, onClick}) => {
  const buttonClasses = `
    ${width ? `w-[${width}px]` : 'w-[376px]'}  
    ${height ? `h-[${height}px]` : 'h-[68px]'} 
    ${backgroundColor ? backgroundColor : 'bg-green-800'}
    ${textColor ? textColor : 'text-white'}
    font-semibold
    text-2xl
    rounded-lg
    mt-5
    ${hover ? 'hover:bg-green-600' : ''}
  `
  
  return (
    <button onClick={onClick} className={buttonClasses}>{placeholder}</button>
  )
}

export default Button