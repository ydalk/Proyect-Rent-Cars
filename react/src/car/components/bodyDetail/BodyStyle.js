import styled from 'styled-components';
import { device } from '../../../Styled';


export const ContainerCalen = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const Img = styled.img`
    width:35px;
`;

export const SectLocation = styled.section`
    background: #a4a6a8;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    font-weight:500;

    & p{
        margin-left: 10px;
        font-size: 18px;
    }

    @media ${device.tablet} {
        & p{
        font-size: 20px;
    }
    }
`;



export const Section = styled.section`

    margin: 50px 0;

    & h4{
            font-size: 28px;
            font-weight:700;
            margin: 30px;
        }

    & p{
        margin: 20px;
        font-size: 20px;
    }

    & h5{
        font-size: 22px;
        margin: 30px;
    }

`;

export const Hr = styled.hr`
    border: solid 1px var(--secundary-color);
    margin:0;
`;

export const Description = styled.div`


    @media ${device.tablet} { 
        display: flex;
        justify-content: start;
        flex-wrap: wrap;

        & div{
            width:350px;
        }
    }

    @media ${device.laptopL} { 
        display: flex;
        justify-content: start;

        & div{
            width:470px;
        }
    }
`;
