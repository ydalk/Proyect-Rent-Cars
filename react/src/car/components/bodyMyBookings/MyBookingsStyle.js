import styled from 'styled-components';
import { device } from '../../../Styled';

export const Section1 = styled.section`
    display: flex;
    flex-direction: column;

    
    @media ${device.tablet} {
        gap: 20px;
    }
`;

export const Wrapper = styled.header`
    background: var(--backgroud);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

`;

export const Container1 = styled.div`
    color: var(--text-color);
    padding-left: 40px;

    & h4{
        font-size: 24px;
        font-weight:600;
    }

    @media ${device.tablet} {
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


export const Wrap3 = styled.div`
display:flex ;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
    border-radius:10px;
    align-items: center;
    margin: 40px auto;
    @media ${device.tablet} {
        margin: 0 auto;
        flex-direction: row;
        gap: 20px;
    }

    & img{
        width: 100%;
        height: auto;
    }

    @media ${device.laptopL} {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 40px;

    }
`;

export const Img = styled.img`
    width:35px;
`;