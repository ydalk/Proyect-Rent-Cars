import styled from 'styled-components';
import { device } from '../../../Styled';

export const BoxSection = styled.section`
    padding: 40px 20px;

    @media ${device.tablet} {
        margin-left: 40px;
    }
`;

export const TitleS = styled.h2`
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 15px;
    text-align: center;

    @media ${device.tablet} {
        text-align: start;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    @media ${ device.tablet } {
        justify-content: start;
    }

    @media ${ device.laptopL } {
        gap: 56px;
        justify-content: space-evenly;
    }
    
`;

export const BoxCard = styled.div`

    border-radius: 20px;
    box-shadow: 8px 8px 20px rgb(0 0 0 / 25%);
    padding: 8px;
    &:hover{
        background-color: #F1F1F1;
        transform: translate(2px, -9px);
        -webkit-transform: translate(2px, -9px);
        -moz-transform: translate(2px, -9px);
        -o-transform: translate(2px, -9px);
        -ms-transform: translate(2px, -9px);
    }
`;

export const Image = styled.img`
    width: 100%;
    height:70%;
    border-radius: 10px 10px 0px 0px;

`;

export const Title = styled.h2`
    color: #383B58;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    padding-left: 12px;
`;

export const Description = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color:hsla(234, 22%, 28%, 0.637);
    padding-left: 12px;
`;

export const BoxButton =styled.button`
    width: 360px;
    height: 220px;
    background: url(${props => props.src });
    background-size: contain;
    background-repeat: no-repeat; 
    border-radius: 13px 13px 0px 0px;
    background-position: bottom;
    border: none;

    @media ${ device.tablet } {
        width: 310px;
        height: 190px;
        -webkit-transition: all 0.5s ease;
	    -moz-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    -ms-transition: all 0.5s ease;
	    transition: all 0.5s ease;
    }
            
    @media ${ device.laptopL } {
         width: 400px;
         height: 240px;
         border-radius: 20px 20px 0px 0px;
    }

`;

export const ButtonCard = styled.button`
    border-radius: 5px;
    border: none;
    width: 20%;
    height: 35px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin-bottom:20px;
	transition: .1s ease all; 
    &:hover{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.36);
        cursor: pointer;
    }

    @media ${ device.tablet} {
        width: 15%;
        font-size: 16px;
    }

    @media ${ device.laptopL} {
        width: 10%;
        font-size: 18px;
    }
`;


