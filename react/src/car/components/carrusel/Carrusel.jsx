import { WrapImg, Img, Div, ImgDesk, ImgPpal, ContainerImg } from './CarruselStyle'
import {useContext} from "react";
import { ImgContext } from "../../../context/useContextCars";
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';


export const Carrusel = ({id}) => {

  const { images, setImages } = useContext(ImgContext);
  const [img, setImg] = useState();

 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 3,
  };

  return (
    <WrapImg>
        <ContainerImg onClick={handleOpen}>
        <div>
        {
          images && images.filter(foto =>  id === foto.product.id ) 
          .map((foto, index )=> ( foto.title ==='principal' && 
            <ImgPpal key={index} src={foto.imgUrl} alt={foto.title} ></ImgPpal>  
          ))   
        }
        </div>
        <div>
          {
            images && images.filter(foto =>  id === foto.product.id ) 
            .map((foto, index ) => ( foto.title !=='principal' && 
              <ImgDesk key={index} src={foto.imgUrl} alt={foto.title} ></ImgDesk>
            ))
          }
              <button id= "more" onClick={handleOpen}>Ver más...</button>
        </div>
        </ContainerImg>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
              <Carousel 
                key={1}
                next={ (next) => setImg(`${next+1 } / 5`)}
              >
                {
                  images && images.filter(foto =>  id === foto.product.id)
                  .map((foto, index ) => ( 
                    <>
                      <Img key={index} src={foto.imgUrl} alt={foto.title} ></Img>
                      <p>{img}</p>
                    </>              
                  ))
                }
              </Carousel>
          </Box>
        </Modal>

      <Div>

        <Carousel
        key={2}
        next={ (next) => setImg(`${next+1 } / 5`)}>
          {
            images && images.filter(foto =>  id === foto.product.id)
            .map((foto, index ) => ( 
              <>
                <Img  key={index} src={foto.imgUrl} alt={foto.title} ></Img>
                <p>{img}</p>
              </>              
            ))
          }
        </Carousel>
                  
      </Div>
    </WrapImg>
    
  )
}