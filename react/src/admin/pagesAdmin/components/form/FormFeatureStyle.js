import styled from 'styled-components';
import { device} from '../../../../Styled';


export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    margin: 10px auto;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin:40px auto;
`;

export const Icon = styled.img`
    width: 25px;
    display: block;
    margin: 0 auto;
   
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
        grid-template-columns: repeat(2, 300px) 20px;
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
    margin: auto;;
    width:100%;
    font-size: 18px;
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
    margin: 3px;
    border-radius: 5px;
    border: solid 1px var(--text-color);
    padding: 3px 10px;
    width:90%;
`;

export const Button = styled.button `
    width: 25px;
    border: none;
    margin: auto;
    background-color: white;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    
    
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
    margin-right: 15px;
`;

export const Radio = styled.input`
    width: 50px;
    margin: 15px 0;
`;

export const LableRadio = styled.label`
        font-size: 18px;
`;

export const Legend = styled.legend`
        font-size: 18px;
`;
