import styled from 'styled-components';
import { device} from '../../../../Styled';


export const Wrapper = styled.div`
    text-align: center;
    width: 60%;
    margin: 15px auto;
    background-color: whitesmoke;
    border-radius: 10px;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin:15px 0;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    width: 90%;

    @media ${device.tablet} {
        width: 90%;
        display: grid;
        grid-template-columns: 80px repeat(1, 250px) 80px repeat(1, 250px);
        gap: 20px;
    }

`;

export const Input = styled.input `
    height: 30px;
    margin: 3px;
    border-radius: 5px;
    border: solid 1px var(--text-color);
    padding: 3px 10px;
    width:90%;
`;

export const Label = styled.label `
    text-align: left;
    margin: auto;
    width:100%;
    font-size: 16px;
`;

export const Option = styled.option `
    padding: 8px;
`;

export const Textarea = styled.textarea `
    text-align: left;
    margin: 2px;
    width:100%;
    height:100px
`;

export const Select = styled.select `
    height: 30px;
    margin: 3px;
    border-radius: 5px;
    border: solid 1px var(--text-color);
    padding: 3px 10px;
    width:90%;
`;

export const Button = styled.button `
    width: 12%;
    height: 40px;
    border: none;
    margin: 20px 0;
    background-color: #041F2C;
    border-radius: 5px;
    color: whitesmoke;
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    bottom: 15px;
    right: 273px;
    
`;
export const MsgError = styled.span `
    margin: 15px auto;
    margin-bottom: 15px;
    padding: 15px;
    font-size: 16px;
    color: #ff0000a3;
    border-radius: 5px;
    font-weight: 500;

`;

export const Close = styled.p`
    text-align: end;
    font-weight: bold;
    color: black;
    cursor: pointer;
    font-size: 20px;
    margin: 15px;
`;

export const DivForm = styled.div`
    position: absolute; 
    display: ${props => props.open ? 'flex' : 'none'};
    right: ${props => props.open ? '20%' : '-100%'};
    width: 800px;
    height:  800px;
    border-radius: 10px;
    background-color: whitesmoke;
    border: 1px solid #c6c6c5;
      
`;

export const Icon = styled.img`
    width: 25px;
    display: block;
    margin: 0 auto;
   
`;

export const FormImg = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    width: 90%;

    @media ${device.tablet} {
        width: 90%;
        display: grid;
        grid-template-columns: 70px repeat(1, 230px) 70px repeat(1, 230px) 40px;
        gap: 20px;
    }


`;