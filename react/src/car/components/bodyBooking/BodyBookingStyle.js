import styled from 'styled-components';
import { device } from '../../../Styled';


export const Section1 = styled.section`

    display: flex;
    flex-direction: column;
    

    @media ${device.tablet} {
        margin: 40px 40px;
        gap: 20px;
    }

    @media ${device.laptopL} {
        flex-direction: row;
    
        margin: 40px 40px;
        gap: 20px;
    }
`;


export const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media ${device.tablet} {
        
            margin: 25px auto;
       
    }

    @media ${device.laptopL} {
        width: 66%;
    }
`;

export const Div = styled.div`
    margin: 0 auto;

`;

export const Wrap3 = styled.div`
display: flex;
justify-content: center;

    border-radius:10px;      
    
    @media ${device.tablet} {
         margin: 0 auto;
    }

    & img{
        width: 100%;
        height: auto;
    }

    @media ${device.laptopL} {
        width: 33%;
    }
`;


export const H4 = styled.h4`
        font-size: 28px;
        font-weight:700;
        margin: 20px;

        @media ${device.tablet} {
            margin: 0 20px;
        }
`;



export const Section = styled.section`

    margin: 50px 0;

    & h4{
            font-size: 28px;
            font-weight:700;
            margin: 0 20px;
        }

    & p{
        margin: 18px;
        font-size: 20px;
    }

    & h5{
        font-size: 22px;
    }

    & h4{
            font-size: 28px;
            font-weight:700;
            margin: 30px;
    }

`;

export const Hr = styled.hr`
    border: solid 1px var(--secundary-color);
    margin:0;
`;