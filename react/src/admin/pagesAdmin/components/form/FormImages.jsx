import { Description } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import configEnvironment from "../../../../config/config.json";
import addImg from '../../../../assets/images/addImage.png';


import { Form, Input, Label, Wrapper, Icon, Title, Close, Select, Option, Button } from './FormImageStyle';


export const FormImages = ({carId}) => {

    
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [formState, setFormState] = useState({});
    const [descripcion, setDescripcion] = useState([
      "seleccione...",
      "principal",
      "lateral",
      "cojineria",
      "trasera",
      "interna"
    ]);

    
    const {title, imgUrl} = formState;
        
    const handleInputChange = ({ target }) => {
      setFormState({
        ...formState,
        [ target.name ]: target.value,
      });
    }
    
    const validatePass = (e)=>{
      e.preventDefault();
        const arr = descripcion.filter(title => title !== formState.title && title !== "seleccione...")
        setDescripcion(arr);

        getData();
        onResetForm();
    }
  
    
    const getData = () => {

      const newUser = {
        ...formState,
        "product": {
          "id": carId
        },
      }
    
      const settings = {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
        }
      } 
      postData(settings);
    }
  
    const postData = async (settings) => {
      let path = configEnvironment.API_PATH_IMAGES + '/new';
      let url = configEnvironment.API_URL + path;
      fetch(url, settings)
        .then(respuesta => respuesta.json())
        .catch( e => {
          console.log("Error escuchando la promesa.");
        })        
    } 

    const onResetForm = ()=>{
        setFormState({})
    }
  
    return (
      <Wrapper>
      
        <Title>Cargar Imagenes</Title>
  
        <Form onSubmit={validatePass} >
            <Label>Descripción</Label>
            
            <Select
              name='title'
              value={ title }
              onChange={ handleInputChange }
              required
            >
            {             
                descripcion?.length > 0 && descripcion?.map((opc, index)=> 
                <Option key={index}>{opc}</Option>)
            }
             
            </Select>
            <Label>Url</Label>
            <Input 
              placeholder='Url'
              type='text'
              name='imgUrl'
              value={ imgUrl }
              onChange={ handleInputChange }
              required
            />
            <Button id="Add" type="submit"><Icon class="icon"  src={addImg} alt='addImg' /></Button>
           
            {err}
        </Form>
      </Wrapper>
    )
}
