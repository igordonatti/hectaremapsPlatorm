import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useState } from "react"
import { RegisterUser } from "../../types/RegisterUser"
import { useUser } from "../../hooks/api/useUser"

const SignUp = () => {
  const userApi = useUser();
  const [formData, setFormData] = useState<RegisterUser>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    cpf: "",
    phone: "",
  })

  const handleChange = (propertie: string ,e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; 

    setFormData((prevData) => ({
      ...prevData,
      [propertie]: value,
    }))
  }

  const handleRegister = async () => {  
    const response = await userApi.registerUser(formData);
    console.log(response);
  }

  return (
     <div className="flex">
      <div className="bg-white w-[35%] h-screen flex flex-col items-center justify-center">
        <span className="font-semibold text-[32px] mb-12">Registre-se</span>
        <Input placeholder="Nome" type="text" onChange={(e) => handleChange("name", e)} />
        <span className="mt-4"></span>
        <Input placeholder="Sobrenome" type="text" onChange={(e) => handleChange("lastname", e)}/>
        <span className="mt-4"></span>
        <Input placeholder="Email" type="email" onChange={(e) => handleChange("email", e)} />
        <span className="mt-4"></span>
        <Input placeholder="Senha" type="password" onChange={(e) => handleChange("password", e)} />
        <span className="mt-4"></span>
        <Input placeholder="CPF" type="text"  onChange={(e) => handleChange("cpf", e)} />
        <span className="mt-4"></span>
        <Input placeholder="Celular" type="text" onChange={(e) => handleChange("phone", e)} />
        <span className="mt-4"></span>
        <Button onClick={handleRegister} placeholder="Solicitar Registro" hover={true} />
      </div>
      <div className="w-[65%] h-screen bg-green-800 flex flex-col justify-center items-center">
        <span className="text-white font-semibold text-5xl mb-10">Já possui uma conta?</span>
        <Link to="/SignIn">
          <Button onClick={() => console.log('ALTERAR ROTA PARA ENTRAR')} placeholder="Entrar" backgroundColor="bg-white" textColor="text-black" hover={false} />
        </Link>
      </div>
    </div>
  )
}

export default SignUp