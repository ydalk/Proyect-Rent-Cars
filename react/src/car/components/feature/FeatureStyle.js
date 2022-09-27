import styled from 'styled-components';
import { device } from '../../../Styled';


export const Wrap3 = styled.div`
    display: flex;
    margin-left: 16px;
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justify};
    & img{
        height: 24px;
    }

    @media ${device.tablet} { 
        justify-content: start;
    }

`;

export const Hr = styled.hr`
    border: solid 1px var(--secundary-color);
    margin:0;
`;

export const ContTitle = styled.div`
    flex-direction: column;
    margin-bottom: 20px;
    display : ${props => props.display};

    @media ${device.tablet} { 

        display : ${props => props.display};
    }

`;

export const Title = styled.h4`
    margin: 16px;
    font-size: 20px;
`;

export const Cont = styled.div`
    display:flex;
    align-items: center;
    padding-right: 20px;
    width: 330px;

`;

export const Text = styled.p`
    display : ${props => props.display};
`;