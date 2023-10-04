import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

const Recovery = () => {
  return (
    <div className="flex">
      <div className="h-screen w-[65%] bg-green-800 flex flex-col items-center justify-center">
      </div>
      <div className="h-screen flex flex-col items-center justify-center w-[35%]">
        <span className="text-[32px] font-semibold mb-12">Recuperar Senha</span>
        <Input placeholder="Email / Usuário" type="email"/>
        <Link to="/RecoveryCode">
          <Button onClick={() => console.log('SOLICITADO CÓDIGO')} placeholder="Solicitar Código" hover={true}/>
        </Link>
      </div>
    </div>
  )
}

export default Recovery