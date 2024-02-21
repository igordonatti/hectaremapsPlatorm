import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"

export const Images = () => {
  const { flightId } = useParams();

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Menu />
        <div className="h-[95%] mt-2 ml-8 w-full mr-6">
          <div className="w-full flex justify-between">
            <span className="text-4xl text-green-800 font-poppins font-semibold">Imagens</span>
            <div className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
            <Link to={`/flights/${flightId}/images/newImage`}>
              <div className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
                <span className="mb-2">+</span>
              </div>
            </Link>
            </div>
          </div>
          <div className="mt-1 bg-white w-full p-3"></div>
        </div>
      </div>
    </div>
  )
}
