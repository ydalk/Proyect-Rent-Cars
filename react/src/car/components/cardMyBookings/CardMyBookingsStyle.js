import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../Styled';

export const BoxSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 8px 8px 20px rgb(0 0 0 / 12%);
    gap:16px;
    margin-top: 40px;
    border-radius: 12px;
    font-family: "Montserrat", sans-serif;
    width: 360px;
    height: auto;

    p{
        text-transform:capitalize;
        font-weight: 500;
        font-size: 16px;
        color: #555;
    }

    h5{
        font-size: 16px;
        color: #555;
    }
    

    @media ${device.tablet} {
        width: 320px;
    }

    @media ${device.laptopL} {
        width: 405px;
    }
`;

export const Container1 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
`;

export const Container2 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 12px 0 36px 0;
`;

export const Stars = styled(FontAwesomeIcon)`
    color: var(--secundary-color);
`;

export const Location = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    color: #717171;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin: 12px 0;

    @media ${device.laptopL} {
            
            font-size: 24px;
        }
`;

export const WrapInput = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        @media ${device.tablet} {
            font-size: 20px;
        }
`;

export const Hr = styled.hr`
    border: solid 0.3px var(--gray-one);
    margin:0;
    
    
`;
