import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
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
        <Input placeholder="Email / Usuário" type="email"/>
        <span className="mt-4"></span>
        <Input placeholder="Password" type="password"/>
        <Link to="/Recovery">
          <span className="text-base font-semibold cursor-pointer mt-5">Esqueceu sua senha?</span>
        </Link>
        <Button onClick={() => console.log('ENTROU')} placeholder="Entrar" hover={true}/>
      </div>
    </div>
  )
}

export default SignIn;