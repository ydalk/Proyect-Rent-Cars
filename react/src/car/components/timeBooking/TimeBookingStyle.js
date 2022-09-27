import styled from 'styled-components';
import { device} from '../../../Styled'

export const Wrapper = styled.div`
    text-align: center;
    margin: 15px;
    width: 90%;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    padding: 10px;
    
    & h5{
        text-align: start;
        padding: 15px;
        font-size: 14px;
    }
    
    @media ${device.tablet} {
        width: 95%;
    }

    @media ${device.laptopL} {
        width: 90%;
    }

`;
   
export const Div = styled.div`
    text-align: start;
    display: flex;
    padding: 10px;
    font-size: 16px;
    align-items: center;
    width: 95%;

    & p{
        padding: 0 10px;
    }

    @media ${device.tablet} {
        text-align: start;
        padding: 10px 0;
        font-size: 18px;
    }

    @media ${device.laptopL} {
        font-size: 22px;

    }
`;

export const Div2 = styled.div`
    
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
`


