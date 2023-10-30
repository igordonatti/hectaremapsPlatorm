import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(user, pwd);
  }

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }

  return (
    <div className="flex">
      <div className="h-screen w-[65%] bg-green-800 flex flex-col items-center justify-center">
        <span className="text-white font-semibold text-5xl mb-12">Ainda não possui um registro?</span>
        <Link to="/SignUp">
          <Button onClick={() => console.log('ALTERAR ROTA PARA REGISTRO')} placeholder="Solicitar Cadastro" backgroundColor="bg-white" textColor="text-black"/>
        </Link>
      </div>
      <div className="h-screen flex flex-col items-center justify-center w-[35%]">
        <span className="text-[32px] font-semibold mb-12">Entrar</span>
        <Input placeholder="Email / Usuário" type="email" onChange={handleUserChange}/>
        <span className="mt-4"></span>
        <Input placeholder="Password" type="password" onChange={handlePwdChange}/>
        <Link to="/Recovery">
          <span className="text-base font-semibold cursor-pointer mt-5">Esqueceu sua senha?</span>
        </Link>
        <Button onClick={handleSubmit} placeholder="Entrar" hover={true}/>
      </div>
    </div>
  )
}

export default SignIn;