import React, { useContext, useState } from 'react'
import userAdd from '../../../../../assets/images/add.png';
import userDelete from '../../../../../assets/images/delete.png';
import userEdit from '../../../../../assets/images/edit.png';
import addFeat from '../../../../../assets/images/addFeat.png';
import configEnvironment from "../../../../../config/config.json";
import { DivTable, Wrapper, Th, Icon, Table, Caption, Td, BtnIco, Tr, DivForm, DivFormImg } from '../tableProduct/TableDataProductStyle';
import { ImgContext, ProductContext} from "../../../../../context/useContextCars";

import { FormProduct } from '../../form/FormProduct';
import { FormImages } from '../../form/FormImages';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';

export const TableDataProduct = ({value}) => {

    const mystyle = {
        width: "180px"
      };

    const {cars, getDataCar} = useContext(ProductContext);
    const { images, getDataImg } = useContext(ImgContext);

    const [showModal, setShowModal] = useState(false);
    const [idImg, setIdImg] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const confirmData = (data) => {
        setShowModal(data);
    }


    const borrar = (id) => {            
        Swal.fire({
          title: "¿Deseas eliminar el producto?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#041F2C",
          cancelButtonColor: "#008CBA",
          cancelButtonText: "Cancelar",
          confirmButtonText: "¡Si, deseo eliminar el producto!",
          focusConfirm: false,
        })
        .then((result) => {
          if(result.isConfirmed && err === 500) {
            Swal.fire({
              title: "¡Lo sentimos!",
              text: "El producto no se pudo eliminar, intente más tarde",
              icon: "warning",
              confirmButtonColor: "#041F2C",
              confirmButtonText: "Cerrar",
              focusConfirm: false,
            }).then((result) => {
              navigate("/admin");
            });
           }else if(result.isConfirmed && err !== 500) {
            deleteById(id);
            Swal.fire({
              title: "¡Muchas gracias!",
              text: "El producto se ha eliminado con éxito",
              icon: "success",
              confirmButtonColor: "#041F2C",
              confirmButtonText: "Cerrar",
              focusConfirm: false,
            }).then((result) => {
              getDataCar();
              navigate("/admin");
            });
           }
        });
    };
    
    const deleteById = (id)=>{

        const settings = {
            method: 'DELETE'
        }
        const path = configEnvironment.API_PATH_CARS + `/${id}`;
        const url = configEnvironment.API_URL + path;
        console.log(url)
        fetch(url, settings)
        .then(respuesta => {respuesta.json()
            setErr(respuesta.status);
        })
        .catch( e => {
            console.log("error esperando la promesa");
        })        
        
    }
    
    const EditBtn = 
        <BtnIco id= "editProduct" data-open="updateProduct" title='editar producto'>
            <Icon  class= "icon" src={userEdit} alt='edit' />
        </BtnIco>
    
    const DeleteBtn = (id)=>{
        return(
        <BtnIco id= 'deleteProduct' onClick={()=>{borrar(id)}} title='eliminar producto'>
            <Icon class="icon" src={userDelete} alt='delete' />
        </BtnIco>
        )
    }

      const Data = 
        cars.map(car => 
            <Tr key={car.id} id={car.id} >
                <Td class={car.name}> {car.name} </Td>
                <Td style={mystyle} class={car.description}> {car.description} </Td>
                <Td class={car.score}> {car.score} </Td>
                <Td class={car.qualification}> {car.qualification} </Td>
                <Td class={car.security}> {car.security} </Td>
                <Td class={car.location}>{car.location} </Td>
                <Td class={car.category.title}> {car.category.title}</Td>
                <Td class={car.city.name}> {car.city.name} </Td>
                <Td> {DeleteBtn(car.id)} {EditBtn} </Td>
            </Tr>
        )
    

  return (
    <div>
        <Wrapper >
            <DivTable id="product" >
                <div>
                    <Table id="productTable">
                        <Caption>Administración de productos</Caption>
                        <thead>
                        <tr>
                            <Th>Nombre</Th>
                            <Th>Descripción</Th>
                            <Th>Puntaje</Th>
                            <Th>Calificación</Th>
                            <Th>Seguridad</Th>
                            <Th>Ubicación</Th>
                            <Th>Categoría</Th>
                            <Th>Ciudad</Th>
                            <Th><Icon id= 'addProduct' onClick={()=>{setShowModal(true)}} src={userAdd} alt="add"></Icon></Th>
                        </tr>
                        </thead>
                        <tbody>
                            {Data}
                        </tbody>
                    </Table>
                </div>
            </DivTable>

     
          <DivForm open = {showModal}>
            <FormProduct confirmData={confirmData}/>
          </DivForm>
      
        </Wrapper>
    </div>
  )
}
