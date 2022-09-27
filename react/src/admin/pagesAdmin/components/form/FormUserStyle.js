import styled from 'styled-components';
import { device} from '../../../../Styled';


export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    margin: 10px auto;
`;

export const Title = styled.h2`
    font-size: 20px;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    width: 90%;

    @media ${device.tablet} {
        width: 90%;
    }

`;

export const Input = styled.input `
    height: 30px;
    margin: 3px;
    border-radius: 5px;
    border: solid 1px var(--text-color);
    padding: 3px 10px;
`;

export const Label = styled.label `
    text-align: left;
    margin: 2px;
`;

export const Button = styled.button `
    width: 100%;
    height: 40px;
    border: none;
    margin: 20px 0;
    background-color:  #041F2C;
    border-radius: 5px;
    color: white;
    font-size: 18px;
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