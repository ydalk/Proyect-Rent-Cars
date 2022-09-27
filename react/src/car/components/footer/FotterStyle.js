import styled from 'styled-components';
import { device} from '../../../Styled'

export const Wrapper = styled.footer`
    margin-top: auto;
    background-color: var(--primary-color);
    height: 58px;
    display: flex;
    align-items: center;
    color: var(--secundary-color);
    padding: 0 15px;
    justify-content: space-between;
    margin-top: 30px;
`;

export const Container = styled.div`
    display: none;
    justify-content: space-evenly;
    width: 20%;
    align-items: center;

    @media ${device.tablet} { 
        display:flex;
        
    }

    @media ${device.laptopL} {
        
        display:flex;
    
    }
`;

export const Img = styled.img`
    width: 35px;
    background-color: var(--primary-color);
`