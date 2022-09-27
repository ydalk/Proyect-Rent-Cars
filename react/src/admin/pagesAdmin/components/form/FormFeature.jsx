import { BoyRounded, Description } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import configEnvironment from "../../../../config/config.json";
import addFeat from '../../../../assets/images/addFeat.png';


import { Form, Input, Label, Wrapper, Icon, Title, Select, Button, Radio, LableRadio, Legend } from './FormFeatureStyle';


export const Formfeature = ({carId}) => {

    
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [formState, setFormState] = useState({});
    
    
    const {imgUrl} = formState;
    
    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value,
      });
    }
    
    const validatePass = (e)=>{
      e.preventDefault();
      console.log(formState)

        getData();
    }
  

    
    const getData = () => {

        const feature = [
            
            {   
                "id": 1,
                "description": formState.seat + " plazas",
                "productId": carId,
                "featureId" : 3     
            },
            {   
                "id": 1,
                "description": formState.transmission,
                "productId": carId,
                "featureId": 2       
            },
            {
                "id": 1,
                "description": formState.air,
                "productId": carId,
                "featureId": 1     
            }
        ]

        feature.forEach(element => {
   
               
            const settings = {
                method: 'POST',
                body: JSON.stringify(element),
                headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                }
            } 
    
            postData(settings);
        });   
    }
    
    const postData = async (settings) => {
    let path = configEnvironment.API_PATH_PROD_FEAT + '/new';
    let url = configEnvironment.API_URL + path;
    fetch(url, settings)
        .then(respuesta => respuesta.json())
        .catch( e => {
        console.log("Error escuchando la promesa.");
        })        
    }         
       
  
    return (
      <Wrapper>
     
        <Title>Cargar Características</Title>
  
        <Form onSubmit={validatePass} >
        <fieldset>
            <Legend>Aire Acondicionado</Legend>

            <LableRadio class="form-check-label" for="air">
                <Radio 
                    className="form-check-input" 
                    type="radio" 
                    value="si"
                    name="air" 
                    id="si" 
                    onChange={handleInputChange} />
                Si
            </LableRadio>
            <label class="form-check-label" for="air">
                <Radio 
                    className="form-check-input" 
                    type="radio" 
                    value="no" 
                    id="no"
                    name="air" 
                    onChange={handleInputChange}
                    />            
                No
            </label>
        </fieldset>
        <fieldset>
            <Legend>Transmisión</Legend>
            
            <LableRadio class="form-check-label" for="transmission">
                <Radio 
                    className="form-check-input" 
                    type="radio" 
                    value="automatica"
                    id="automatica" 
                    name="transmission"
                    onChange={handleInputChange}/>
                Automatica
            </LableRadio>
            <LableRadio class="form-check-label" for="transmission">
                <Radio 
                    className="form-check-input" 
                    type="radio" 
                    value="manual"
                    name="transmission"
                    id="manual" 
                    onChange={handleInputChange}/>
                Manual
            </LableRadio>
        </fieldset>
        <p></p>
        <Label>Sillas</Label>
        <Input 
            placeholder='Sillas'
            type='Number'
            name='seat'
            value={ imgUrl }
            onChange={ handleInputChange }
            required
        />
        <Button id="Add" type="submit"><Icon className="icon"  src={addFeat} alt='addImg' /></Button>
        
        {err}
        </Form>
      </Wrapper>
    )
}
