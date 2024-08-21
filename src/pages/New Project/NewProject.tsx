import React, { useContext, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useProject } from '../../hooks/api/useProject'

const NewProject = () => {
  const [name, setName] = useState('');
  const auth = useContext(AuthContext);
  const project = useProject();
  const navigate = useNavigate();
  
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.user && name && auth.token) { 
      project.createProject(name, auth.user.id, auth.token);
      navigate('/projects');  
    }
    else console.log("Nome do projeto obrigatório!");
  }

  return (
    <div className="h-screen">
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Projeto</span>
          </div>
          <div className="bg-white w-full mt-4 flex flex-col items-center">
            <input type="text" placeholder='Nome do Projeto' onChange={onChangeName} className='h-12 w-full bg-gray-100 p-4 text-green-800 font-poppins focus:outline-none'/>
            <button onClick={handleSubmitButton} className='mt-2 rounded-lg font-poppins w-2/5 h-12 bg-green-800 text-white '>Criar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProject