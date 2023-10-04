import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

const SignUp = () => {
  return (
    <div className="flex">
      <div className="bg-white w-[35%] h-screen flex flex-col items-center justify-center">
        <span className="font-semibold text-[32px] mb-12">Registre-se</span>
        <Input placeholder="Nome" type="text"/>
        <span className="mt-4"></span>
        <Input placeholder="Email" type="email"/>
        <span className="mt-4"></span>
        <Input placeholder="CPF" type="text"/>
        <span className="mt-4"></span>
        <Input placeholder="Celular" type="text"/>
        <Button onClick={() => console.log('Solicitado Registro')} placeholder="Solicitar Registro" hover={true}/>
      </div>
      <div className="w-[65%] h-screen bg-green-800 flex flex-col justify-center items-center">
        <span className="text-white font-semibold text-5xl mb-10">Já possui uma conta?</span>
        <Link to="/SignIn">
          <Button onClick={() => console.log('ALTERAR ROTA PARA ENTRAR')} placeholder="Entrar" backgroundColor="bg-white" textColor="text-black" hover={false}/>
        </Link>
      </div>
    </div>
  )
}

export default SignUp