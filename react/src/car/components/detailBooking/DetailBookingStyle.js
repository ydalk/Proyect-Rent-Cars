import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../Styled';

export const BoxSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px ;
    box-shadow: 8px 8px 20px rgb(0 0 0 / 25%);
    gap:16px;
    margin-top: 68px;
    width: 360px;
    border-radius: 10px;
    
    @media ${device.tablet} {
        width: 640px;
        border-radius: 10px;
    }

    @media ${device.laptopL} {
        width: fit-content;
        gap:25px;
        & h5{
            font-size: 20px;
        }
    }
`;

export const Container1 = styled.div`
        display: flex;
        flex-direction: column;
`;

export const Container2 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 12px 0;
`;


export const WrapInput = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        @media ${device.tablet} {
            font-size: 20px;
        }
`;

export const Stars = styled(FontAwesomeIcon)`
    color: var(--secundary-color);
`;

export const Location = styled.div`
    display: flex;
    gap: 8px;
    color: #717171;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: 12px 0;
    text-align: end;

`;

export const Button = styled.button`
    color: #F3F3F3;
    background: var(--secundary-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
	transition: .1s ease all; 
    &:hover{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.16);
        cursor: pointer;
    }
`;

export const H4 = styled.h4`
        font-size: 28px;
        font-weight:700;
        margin: 30px;

        
`;

export const H5 = styled.h4`
        font-size: 22px;

        @media ${device.laptopL} {
            margin: 20px 0;
            font-size: 24px;
        }
`;

export const Hr = styled.hr`
    border: solid 0.5px var(--gray-one);
    margin:0;
`;

