import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const SignIn = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(user && pwd) {
      const isLogged = await auth.signIn(user, pwd);
      if(isLogged){
        navigate('/Home');
      } else {
        setError(true);
      }
    }
  }

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }

  const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(event.target.value);
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
        <span className="text-[32px] font-semibold mb-6">Entrar</span>
        {
          error && <div className="bg-red-300 h-[68px] w-[376px] text-white rounded-sm items-center flex mb-4 border-red-600 text-center content-center justify-center">Usuário ou senha incorretos.</div>
        }
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