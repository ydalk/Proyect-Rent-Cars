import styled from 'styled-components';
import { device } from '../../../Styled';


export const Wrapper = styled.header`
    background: var(--backgroud);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

`;

export const Container1 = styled.div`
    color: var(--text-color);
    margin-left: 25px;

    & p{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 6px;
    }
    & h4{
        font-size: 26px;
        font-weight:700;
    }

    @media ${device.laptopL} {

        & p{
        font-size: 20px;
        
        }
        & h4{
            font-size: 26px;
        }
    }
`;

export const Container2 = styled.div`
    margin-right: 20px;

    @media ${device.tablet} {
        margin-right: 35px;
    }
`;


export const Img = styled.img`
    width:35px;
`;

export const SectLocation = styled.section`
    background: var(--primary-color);
    height: 60px;
    display: ${props => props.visible };
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    font-weight:500;
    opacity: 0.7;

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
