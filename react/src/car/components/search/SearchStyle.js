import styled from "styled-components";
import { device } from '../../../Styled';
import fondo2 from '../../../assets/images/fondo2.jpg';



export const Div= styled.div`
  background-size: cover;
  background-position: bottom;
  background-image: url(${fondo2});
  justify-content:center;
  height:450px;
  display: ${props => props.visibility };
  flex-direction:column;
  padding: 0 25px;
}
`;

export const Containershade = styled.div`
  background:#64a8ba4f;
  border-radius: 15px;
  padding: 25px 0px;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  margin: 0 auto;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  
  @media ${ device.tablet} {
    padding: 50px 0px;
    width: 90%;
  }

`;


export const H1= styled.h2`
  color: var(--text-color);
  text-align: center; 
  font-size:30px;
  padding: 25px 0;

  @media ${ device.tablet} {
    font-size:40px;
  }

  @media ${ device.laptopL} {
    font-size:50px;
  }
`;

export const Containerinput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 10px;
  width: 80%;
  flex-direction: column;
  margin: 0 auto;

  
  @media ${ device.tablet} {
    flex-direction: row;
    font: inherit; 
    font-size: 12px;
    padding: 2px;
    margin: 0 auto;
    width: 90%;
    gap: 15px;
  }

  @media ${ device.laptopL} {
    flex-direction: row;
  }
`;

export const Button = styled.button`
    color: var(--text-color) ;
    background: var(--primary-color);
    border-radius: 5px;
    border: none;
    height: 50px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    flex:1;

    @media ${ device.mobileM} {
      width: 250px;
      flex: 2;
      height: 25px;
      padding:10px;
      }

    @media ${ device.tablet} {
      flex: 1;
     
    }
`;

  
export const customStyles = {
  control: (base, state) => ({
    ...base,
    width: 'auto',
    flex:2
  })
};




