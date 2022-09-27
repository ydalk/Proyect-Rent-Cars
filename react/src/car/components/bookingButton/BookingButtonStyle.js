import styled from 'styled-components';
import { device } from '../../../Styled';

export const WrapReserv = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 20px;

    

    @media ${device.tablet} {

        width: 30%;
    }

    ${'' /* & h3{
        text-align: center;
        margin: 0 15px;
        font-size : 14px;
     } */}
`;


export const Button = styled.button`
    color: #F3F3F3;
    background: var(--secundary-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 40px;
    font-style: normal;
    font-weight: 500;
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