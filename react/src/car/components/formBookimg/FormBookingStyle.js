import styled from 'styled-components';
import { device} from '../../../Styled'

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;


`;

export const Form = styled.form `

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    padding: 15px;
    width: 85%;

    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
    }

    @media ${device.laptopL} {
        width: 90%;
    }

`;

export const Input = styled.input `
    height: 40px;
    margin: 4px;
    border-radius: 5px;
    border: solid 1px #ccc;
    padding: 5px 10px;
    width: 95%;
    font-size: 18px;
    

    @media ${device.tablet} {
        width: 90%;
        font-size: 22px;
    }


`;

export const Label = styled.label `
    margin: 4px;
    width: 90%;

    @media ${device.tablet} {
        width: 90%;
    }
`;

   
export const Div = styled.div`
    text-align: start;
    width: 95%;


    @media ${device.tablet} {
        text-align: start;
        width: 50%;
        padding: 10px 0;
        font-size: 18px;
    }

    @media ${device.laptopL} {
        font-size: 22px;

    }
`;


