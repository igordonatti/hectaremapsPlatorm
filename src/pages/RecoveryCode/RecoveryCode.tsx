import { Link } from "react-router-dom"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

const RecoveryCode = () => {
  return (
    <div className="flex">
      <div className="h-screen w-[65%] bg-green-800 flex flex-col items-center justify-center">
      </div>
      <div className="h-screen flex flex-col items-center justify-center w-[35%]">
        <span className="text-[32px] font-semibold mb-12">Inserir Código</span>
        <Input placeholder="Código" type="text"/>
        <Link to="/RecoveryPassword">
          <Button onClick={() => console.log('REDEFINIR SENHA')} placeholder="Redefinir Senha" hover={true}/>
        </Link>
      </div>
    </div>
  )
}

export default RecoveryCode