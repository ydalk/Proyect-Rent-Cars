import styled from 'styled-components';
import { device } from '../../../Styled';


export const WrapSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0;
    width: min-content;

    @media ${device.tablet} {
        width: auto;
    }
`;



