import { Link, useParams } from "react-router-dom"
import Menu from "../../components/Menu/Menu"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useImage } from "../../hooks/api/useImages";
import ArchiveItem from "../../components/ArchiveItem/ArchiveItem";

export const Images = () => {
  const { flightId } = useParams();
  const auth = useContext(AuthContext);
  const imagesApi = useImage();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (flightId && auth.token){ 
          const response = await imagesApi.getImagesFromFlightID(+flightId, auth.token)
          setImages(response);
        }
      } catch (error) {
        console.log("Erro ao buscar imagens: ", error);
      }
    }

    fetchImages();
  }, [auth])

  return (
    <div className="flex">
      <Menu />
      <div className="mt-2 ml-8 w-[90%] mr-6">
        <div className="flex justify-between">
          <span className="text-4xl text-green-800 font-poppins font-semibold">Arquivos</span>
          <Link to={`/flights/${flightId}/images/newImage`}>
            <div className="flex bg-green-800 text-white rounded-full cursor-pointer h-8 w-8 items-center align-middle justify-center text-4xl">
              <span className="mb-2">+</span>
            </div>
          </Link>
        </div>
        <div className="teste mt-4 grid grid-flow-col grid-cols-4 gap-4 min-h-screen w-full">
          {
            images.map((item, index) => {
              return (
                <ArchiveItem archive={item} key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
