import styled from 'styled-components';
import { device } from '../../../Styled';

export const Description = styled.div`

    & div{
        margin: 20px;
    }

@media ${device.tablet} { 
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    

    & div{
        width:320px;
        margin: 30px;
    }
}

@media ${device.laptopL} { 
    display: flex;
    justify-content: start;

    & div{
        width:410px;
        margin: 30px;
    }
}
`;

