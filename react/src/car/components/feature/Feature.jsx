import { useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import transI from '../../../assets/images/trans.png';
import seatI from '../../../assets/images/seat.png';
import airI from '../../../assets/images/air.png';
import { Wrap3, Title, ContTitle, Hr, Cont, Text } from './FeatureStyle';
import { FeatureContext} from '../../../context/useContextCars';

export const Feature = ({id}) => {

  const { features } = useContext(FeatureContext);
  
  let display = 'block';
  let justify = 'space-around';
  let wrap = 'wrap';

  const {pathname} = useLocation();

  if(pathname === `detail/${id}`){
    display = 'flex';
    justify = 'space-around';
    wrap = 'wrap';
  }else if(pathname === '/'){
    display = 'none';
    justify = 'flex-start';
    wrap = 'initial';
  }else if(pathname === '/sesion' ){
    display = 'none';
    justify = 'flex-start';
    wrap = 'initial';
  }  

  return ( 

    <> 
    <ContTitle display={display}>
      <Title > Caracteristicas </Title> 
      <Hr/> 
    </ContTitle>
    <Wrap3 justify={justify} wrap={wrap}>
      {
        features && features?.filter(feat => (feat.product.id === id) && (feat.feature.id === 1))
        .map((feat, index) => ( feat.description === 'si' ?
          <Cont key={index}>
            <img src={airI} alt="airConditioning" /> 
            <Text display={display} >Aire Acondicionado</Text>
          </Cont>
          : null

        ))
      }
      {
        features && features?.filter(feat => (id === feat.product.id) && (feat.feature.id === 2))
        .map((feat, index) =>(feat.description !== '' ?
          <Cont key={index} >
            <img  src={transI} alt='transmission' />
            <Text  display={display} >{feat.description}</Text>
          </Cont>
          : null
        ))  

      }
      {
        features && features?.filter(feat => (id === feat.product.id) && (feat.feature.id === 3))
        .map((feat, index) =>( feat.description !== '' ?
          <Cont key={index}>
            <img src={seatI} alt="numberSeat" />
            <Text display={display} >{feat.description}</Text>
          </Cont>
           : null
        ))  
      }
    </Wrap3> 
    </>
    
  )
}
