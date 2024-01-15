import React, { useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Menu from '../../components/Menu/Menu'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useApi } from '../../hooks/useApi'
import { useNavigate } from 'react-router-dom'

const NewProject = () => {
  const [name, setName] = useState('');
  const auth = useContext(AuthContext);
  const api = useApi();
  const navigate = useNavigate();
  
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (auth.user && name && auth.token) { 
      api.createProject(name, auth.user.id, auth.token);
      navigate('/projects');  
    }
    else console.log("Nome do projeto obrigatório!");
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Novo Projeto</span>
          </div>
          <div className="bg-white w-full mt-4 flex flex-col">
            <Input type='text' placeholder={name ? `${name}` : "Nome"} onChange={onChangeName}/>
            <Button onClick={handleSubmitButton} placeholder='Criar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProject