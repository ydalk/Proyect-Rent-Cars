import { useContext, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import configEnvironment from "../../../../config/config.json";
import { CatContext, CityContext, ProductContext } from '../../../../context/useContextCars';
import { FormImages } from './FormImages';
import check from '../../../../assets/images/check.png';
import { Form, Input, Label, Wrapper, Button, Title, Close, Select, Textarea, Option, Icon, FormImg } from './FormProductStyle';
import { Formfeature } from './FormFeature';
import { fetchAPI } from '../../../../helpers/fetch-api';
import { AutofpsSelectOutlined } from '@mui/icons-material';

export const FormProduct = ({confirmData}) => {

    const data = false;
    const { get } = fetchAPI();
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [idAct, setIdAct] = useState(0);
    const [formState, setFormState] = useState({});
    const [catSelect, setCatSelect] = useState({});

    const [showModalImg, setShowModalImg] = useState(false);
    const { cat } = useContext(CatContext);
    const { cities } = useContext(CityContext);

    const [ carsNew, setCarsNew] = useState();

    const { name, score, qualification, description, security, location} = formState;
    const { city, category} = catSelect;


    const confirmDataImg = (data) => {
      setShowModalImg(data);
    }
    
    const categories = cat.map((cate) =>         
      <Option key={cate.id}>{cate.id}. {cate.title}</Option>
    ) 

    const ciudades = cities.map((ciud) =>         
      <Option key={ciud.id}>{ciud.id}. {ciud.name}</Option>
    ) 

    const handleInputChange = ({ target }) => {
      setFormState({
        ...formState,
        [ target.name ]: target.value,
      });
    }

    const handleSelectChange = ({ target }) => {
      setFormState({
        ...formState,
        [ target.name ]: {"id" : Number(target.value.charAt(0))},
      
      });
    }

    const handleOtherChange = ({ target }) => {
      setFormState({
        ...formState,
        [ target.name ]: Number(target.value),
      
      });
    }

   
    const validatePass = (e)=>{
      e.preventDefault();
        getData(); 
    }
  
    
    
    const getData = () => {
      
      const settings = {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
        }
      } 
      postData(settings);      
    }

    const postData = async (settings) => {
      let path = configEnvironment.API_PATH_CARS + '/new';
      let url = configEnvironment.API_URL + path;
      fetch(url, settings)
        .then(respuesta => respuesta.json())
        .then(() => getDataCar())
        .catch( e => {
          console.log("Error escuchando la promesa.");
        })        
    } 

    const getDataCar = async () => {
      const autos = await get(configEnvironment.API_PATH_CARS)
      setCarsNew(autos);
      setTimeout(() => {
        obtaninId();
      }, 1500);
    } 
    console.log(carsNew);
    
    const obtaninId = ()=> {
      const last = carsNew[carsNew.length];
      setIdAct(last.id);
      console.log(last);
    }

    const guardar = () => {            
      Swal.fire({
        title: "Deseas confirmar el nuevo registro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#041F2C",
        cancelButtonColor: "#008CBA",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, deseo confirmar el registro!",
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "??Muchas gracias!",
            text: "El registro se ha guardado con ??xito",
            icon: "success",
            confirmButtonColor: "#041F2C",
            confirmButtonText: "Cerrar",
            focusConfirm: false,
          }).then((result) => {
            confirmData(data);
            navigate("/admin");
          });
        }else if(!result.isConfirmed){
          confirmData(data)
        }
      });
    };

  return (
    <>
      <Wrapper>
        <Close onClick={()=>{confirmData(data)}}> X </Close>
        <Title>Registrar Producto</Title>
  
        <Form onSubmit={validatePass} >
  
            <Label>Nombre</Label>
            <Input 
              placeholder='Nombre' 
              type='text'
              name='name'
              value={ name }
              onChange={ handleInputChange }
              required
            />
            <Label>Puntaje</Label>
            <Input 
              placeholder='Puntaje (1 - 10)'
              type= "number"
              min='1'
              max='10'
              name='score'
              value={ score }
              onChange={ handleOtherChange }
              required
            />
            <Label>Calificaci??n</Label>
            <Select
              name='qualification'
              value={ qualification }
              onChange={ handleInputChange }
              required
            >
              <Option>Bueno</Option>
              <Option>Muy bueno</Option>
              <Option>Excelente</Option>
            </Select>
            <Label>Descripci??n</Label>
            <Textarea
              maxlength="10"
              placeholder='Descripci??n'
              type='text'
              name='description'
              value={ description }
              onChange={ handleInputChange }
              required
            />
            <Label>Ubicaci??n</Label>
            <Input 
              placeholder='Ubicaci??n'
              type='text'
              name='location'
              value={ location }
              onChange={ handleInputChange }
              required
            />
            <Label>Seguridad</Label>
            <Input 
              placeholder='Seguridad (1 - 5)'
              type= "number"
              min='1'
              max='5'
              name='security'
              value={ security }
              onChange={ handleOtherChange }
              required
            />
            <Label>Categoria</Label>
            <Select
              name='category'
              value={ category }
              onChange={ handleSelectChange }
              required
            > 
            {categories}
            </Select>
            <Label>Ciudad</Label>
            <Select
              name='city'
              value={ city }
              onChange={handleSelectChange }
              required
            >
            {ciudades}
            </Select>
            <button id="AddProd" type="submit" ><Icon class="icon"  src={check} alt='check' /></button>            
            
            {err}
            </Form>
            <FormImages carId={idAct}/>
            <Formfeature carId={idAct}/>
            <Button id="Add" onClick={guardar}>Guardar</Button>
      </Wrapper>
      </>
    )
}
