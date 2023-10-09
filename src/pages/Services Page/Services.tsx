import Menu from "../../components/Menu/Menu"
import Navigator from "../../components/Navigator/Navigator"

const Services = () => {
  return (
    <div className="w-screen h-screen flex">
      <Menu />
      <div className="h-[95%] self-center ml-8 w-full mr-6">
        <span className="text-4xl text-green-800 font-poppins font-semibold">Serviços</span>
        <Navigator />
     </div>
    </div>
  )
}

export default Services