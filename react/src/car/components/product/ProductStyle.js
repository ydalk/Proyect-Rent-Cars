import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../Styled';

export const BoxSection = styled.section`
    margin: 40px 20px;

    @media ${device.tablet} {
        margin: 40px 60px;
    }
`;

export const TitleS = styled.h2`
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 32px;
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

    @media ${ device.laptopL } {
        justify-content: space-around;
        
    }

`;

export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 380px;
    height: 585px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.12);
    background-color: lavender;
    border-radius: 10px;

    @media ${device.tablet} {
        flex-direction: column;
        width: 325px;
        height: 580px;
        gap: 0;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
        &:hover{
            transform: translate(2px, -9px);
        -webkit-transform: translate(2px, -9px);
        -moz-transform: translate(2px, -9px);
        -o-transform: translate(2px, -9px);
        -ms-transform: translate(2px, -9px);
    }
    }

    @media ${device.laptopL} {
        width: 405px;
        height: 575px;
    }
    
`;

export const BoxDetail = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
padding: 16px;

    @media ${device.tablet} {
        justify-content: center;
    }
`;

export const Wrap1 = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const Category = styled.h5`
    color: #545776;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
`;

export const WrapStars = styled.div`
    display: flex;
    gap:4px;
    flex-direction: column;
    align-items: center;

    & p{
        font-size:12px;
    }
`;

export const Stars = styled(FontAwesomeIcon)`
    color: #008CBA;
`;


export const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.h2`
    color: #222222;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`;

export const Location = styled.div`
    display: flex;
    gap: 8px;
    color: #717171;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-top: 12px;

`;

export const Cta = styled.span`
    color: var(--blue-color);
`;


export const Description = styled.p`
    color: #222222;
    margin: 8px 0;
    font-size: 16px;
`;

export const ButtonCard = styled.button`
    color: var(--text-color);
    background: var(--secundary-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
	transition: .1s ease all; 
    &:hover{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.36);
        cursor: pointer;
    }
`;