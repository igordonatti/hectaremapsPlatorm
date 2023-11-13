import React, { useState } from 'react';

interface InputProps {
  backgroundColor?: string;
  placeholder: string;
  height?: string;
  width?: string;
  type: string;
  options?: string[]; // Adicione um array de opções
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: React.FC<InputProps> = ({ height, width, type, placeholder, options, onChange }) => {
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(selectedOptions);
    selectedValues.push(event.target.value);
    setSelectedOptions(selectedValues);
    console.log(selectedOptions);
  };

  if (type === 'select' && options) {
    return (
      <div className='relative flex items-center'>
        <div className="absolute inset-y-0 left-0 flex">
          <div className="w-2 h-full bg-green-800"></div>
        </div>
        <select
          className={InputClasses}
          onChange={handleSelectChange}
          multiple // Adicione a propriedade multiple para permitir seleção múltipla
        >
          {options.map((opt, index) => (
            <option key={index} value={opt} className={`${selectedOptions.includes(opt) ? "bg-green-600" : ""}`}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className='relative flex items-center'>
        <div className="absolute inset-y-0 left-0 flex">
          <div className="w-2 h-full bg-green-800"></div>
        </div>
        <input
          placeholder={placeholder}
          className={InputClasses}
          type={type}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input