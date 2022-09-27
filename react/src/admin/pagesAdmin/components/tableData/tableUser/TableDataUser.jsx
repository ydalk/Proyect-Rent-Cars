import React, { useContext, useState } from 'react'
import userAdd from '../../../../../assets/images/add.png';
import userDelete from '../../../../../assets/images/delete.png';
import userEdit from '../../../../../assets/images/edit.png';
import configEnvironment from "../../../../../config/config.json";
import { DivTable, Wrapper, Th, Icon, Table, Caption, Td, BtnIco, Tr, DivForm } from './TableDataStyle';
import {AdminContext} from "../../../../../context/useContextCars";
import { FormUser } from '../../form/FormUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



export const TableDataUser = ({value}) => {

    const {users} = useContext(AdminContext);
    const { getDataUser } = useContext(AdminContext);
    const [showModal, setShowModal] = useState(false);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const confirmData = (data) => {
        setShowModal(data);
    }

    const borrar = (id) => {            
        Swal.fire({
          title: "¿Deseas eliminar el registro?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#041F2C",
          cancelButtonColor: "#008CBA",
          cancelButtonText: "Cancelar",
          confirmButtonText: "¡Si, deseo eliminar el registro!",
          focusConfirm: false,
        })
        .then((result) => {
          if(result.isConfirmed && err === 500) {
            Swal.fire({
              title: "¡Lo sentimos!",
              text: "El registro no se pudo eliminar, intente más tarde",
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
              text: "El registro se ha eliminado con éxito",
              icon: "success",
              confirmButtonColor: "#041F2C",
              confirmButtonText: "Cerrar",
              focusConfirm: false,
            }).then((result) => {
              getDataUser();
              navigate("/admin");
            });
           }
        });
    };
    
    const deleteById = (id)=>{

        const settings = {
            method: 'DELETE'
        }
        const path = configEnvironment.API_PATH_USERS + `/${id}`;
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
        <BtnIco id= "editUser" data-open="updateUser">
            <Icon  class= "icon" src={userEdit} alt='edit' />
        </BtnIco>
    
    const DeleteBtn = (id)=>{
        return(
        <BtnIco id= 'deleteUser' onClick={()=>{borrar(id)}} >
            <Icon class="icon" src={userDelete} alt='delete' />
        </BtnIco>
        )
    }

    const Data = 
        users.map(user => 
            <Tr  key={user.userId} id={user.userId} >
                <Td class={user.name}> {user.name} </Td>
                <Td class={user.lastName}> {user.lastName} </Td>
                <Td class={user.email}> {user.email} </Td>
                <Td class={user.cityUser}> {user.cityUser} </Td>
                <Td class={user.role.name}> {user.role.name} </Td>
                <Td> {DeleteBtn(user.userId)} {EditBtn} </Td>
            </Tr>
        )
    

  return (
    <div>
        <Wrapper >
            <DivTable id="usuario" >
                <div>
                    <Table id="usuarioTable">
                        <Caption>Administración de usuarios</Caption>
                        <thead>
                        <tr>
                            <Th>Nombre</Th>
                            <Th>Apellido</Th>
                            <Th>Email</Th>
                            <Th>Ciudad</Th>
                            <Th>Rol</Th>
                            <Th><Icon id= 'addUser' onClick={()=>{setShowModal(true)}} src={userAdd} alt="addUser"></Icon></Th>
                        </tr>
                        </thead>
                        <tbody>
                            {Data}
                        </tbody>
                    </Table>
                </div>
            </DivTable>

      
          <DivForm open = {showModal}>
            <FormUser confirmData={confirmData} />
          </DivForm>
      
        </Wrapper>
    </div>
  )
}
