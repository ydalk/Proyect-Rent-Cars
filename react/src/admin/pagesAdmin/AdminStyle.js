import styled from 'styled-components';
import { device} from '../../Styled'

export const Wrapper = styled.div`
    text-align: center;
    margin: 40px auto;
    width:90%;
    min-height: 90vh;
    border-radius: 20px;
    box-shadow: 8px 8px 20px rgb(0 0 0 / 25%);
`;

export const Container1 = styled.div`
    display: flex;
    align-items: center;
    color: var(--text-color);
    height: 80px;
    background: var(--backgroud);
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


export const DivTab = styled.div`
        overflow: scroll;
        height: 400px;
        width: 330px;
        position: absolute;
        margin: 0 30px;
    
    @media ${device.tablet} {
        overflow: scroll;
        height: 400px;
        width: 590px;
        position: absolute;
        margin: 0 30px;
    }

    @media ${device.laptopL} {
        overflow: scroll;
    height: 600px;
    width: 100%;
    }
`;
