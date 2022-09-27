import styled from 'styled-components';
import { device } from '../../../Styled';

export const WrapImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    padding: 15px;

`;

export const Img = styled.img`

    height: 350px;
    width: 430px;

    @media ${ device.tablet } {
        height: 520px;
        width: 100%;
    }

    @media ${ device.laptopL } {
        height: 670px;
        width: 100
    }

`;

export const Div = styled.div`
    width: 100%;
    margin: 0 auto;
    display: block;

    & p{
        text-align:center;
        font-size:16px;
        padding: 6px;
        font-weight:700;
    }

    @media ${ device.laptopL } {
        display: none;
    }
`;

export const ContainerImg = styled.div`
    display: none;

    @media ${ device.tablet } {
        display: none;
    }

    @media ${ device.laptopL } {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        & button{
            position: absolute;
            right: 10px;
            font-size: 24px;
            font-weight: 700;
            bottom: -35px;
            border: none;
            background-color: initial;
            color: black;
            color: blue;
            text-decoration: underline;
        }
    }
    

`;

export const ImgPpal = styled.img`
    width:100%;
    border-radius: 10px;

`;

export const ImgDesk = styled.img`
    width:48%;
    padding: 3px 5px;
    border-radius: 10px;
`;