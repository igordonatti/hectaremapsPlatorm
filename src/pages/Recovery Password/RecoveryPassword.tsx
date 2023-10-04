import { Link } from "react-router-dom"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

const RecoveryPassword = () => {
  return (
    <div className="flex">
      <div className="h-screen w-[65%] bg-green-800 flex flex-col items-center justify-center">
      </div>
      <div className="h-screen flex flex-col items-center justify-center w-[35%]">
        <span className="text-[32px] font-semibold mb-12">Redefinir Senha</span>
        <Input placeholder="Senha Nova" type="password"/>
        <span className="mt-4"></span>
        <Input placeholder="Confirmar Senha" type="password"/>
        <Link to="">
          <Button onClick={() => console.log('ENTRAR')} placeholder="Entrar" hover={true}/>
        </Link>
      </div>
    </div>
  )
}

export default RecoveryPassword