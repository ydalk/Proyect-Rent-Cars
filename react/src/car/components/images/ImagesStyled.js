import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../Styled';

export const WrapImg = styled.div`
    width: 100%;
    position: relative;
`;


export const Heart = styled(FontAwesomeIcon)`
    color : white;
    position: absolute;
    z-index: 1;
    right: 16px;
    padding-top: 16px;
    width: 20px;
    height: 20px;
    

    &:hover{
            color: red;
            cursor: pointer;
    }

    @media ${device.tablet} {
        padding-top: 20px;
        left: 285px;
        width: 25px;
        height: 25px;
            &:hover{
            color: red;
            cursor: pointer;
        }
    }

    @media ${device.laptopL} {
        left: 365px;
        
    }
`;

export const Image = styled.img`
    max-width: 100%;
    width: 430px;
    height: 253px;
    border-radius: 8px 8px 0 0;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.tablet} {
        max-height:100%;
    }

    @media ${device.laptopL} {
        min-width: 50%;
    }

`;