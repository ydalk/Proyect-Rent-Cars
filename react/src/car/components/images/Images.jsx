import { useLocation } from 'react-router-dom'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Image, WrapImg, Heart} from "./ImagesStyled";
import { ImgContext } from '../../../context/useContextCars';

export const Images = ({id}) => {
  
  const {images} = useContext(ImgContext);
  const {pathname} = useLocation();

    

  return (
    <WrapImg>
      {
        pathname === '/' || pathname === '/sesion' ? <Heart icon={ faHeart } /> : <Heart icon={ faHeart } style={ {display: "none"} }/>
      }
      
      {
          images?.filter((foto) => id === foto.product.id && foto.title === "principal")
          .map((foto, index)=>(<Image key={index} src={ foto.imgUrl } alt={ foto.id }></Image>) )
      }          
    </WrapImg>
  )
}
