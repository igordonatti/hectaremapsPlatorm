import { useState } from "react";

const navigatorFilters = ["Tudo", "Concluídos", "Processando"]

const Navigator = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Tudo");
  
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  }

  return (
    <div>
      <ul className="mt-4 flex w-full space-x-6">
        {
          navigatorFilters.map((item, index) => {
            return <li onClick={() => handleItemClick(item)} className={`${selectedItem === item ? 'text-green-800 font-semibold border-b-2 border-green-800' : 'text-gray-500'} transition-colors`} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Navigator