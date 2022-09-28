import styled from 'styled-components';
import { device} from '../../Styled'

export const Wrapper = styled.div`
    text-align: center;
    margin: 20px 0;
    min-height: 70vh;
`;

export const Title = styled.h2`
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    margin: 0 auto;

    @media ${device.tablet} {
        width: 60%;
    }

`;

export const Input = styled.input `
    height: 40px;
    margin: 4px;
    border-radius: 5px;
    border: solid 1px var(--text-color);
    padding: 3px 10px;
`;

export const Label = styled.label `
    text-align: left;
    margin: 4px;
`;

export const Button = styled.button `
    width: 100%;
    height: 40px;
    border: none;
    margin: 20px 0;
    background-color:  var(--secundary-color);
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

export const Must = styled.span `
    color: red;

`;

