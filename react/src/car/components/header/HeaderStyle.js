import styled from 'styled-components';
import { device} from '../../../Styled'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px 10px 15px 0;
    align-items: center;
    position: sticky;
    top: 0;
    background-color:var(--primary-color);
    z-index: 2;
    height:90px;

    @media ${device.tablet} {
        height:110px;
    }

    @media ${device.laptopL} {
        height:120px;
    }
`;

export const Image = styled.img`
    width: 170px;    

    @media ${device.tablet} {        
        width: 230px;
        margin:10px;
    }

    @media ${device.laptopL} {        
        width: 280px;
        margin:10px;
    }
`;


export const BurguerDiv = styled.div`
    display: ${props => props.visibilityB };

    @media ${device.tablet} {
        display:none;
    }

    @media ${device.mobileM} {
        display:none;
    }

`;

export const Cancel = styled.img`
    width:40px;
    background-color: var(--text-color);
    border-radius: 40px;

`;

export const Menu = styled.img`
    width:35px;
    border-radius: 40px;
`;

export const Title = styled.p`
    padding-bottom: 7px;
    font-size: 20px;
    color:#29333d;
    font-style: italic;
    
`;

export const ButtonR = styled.button`
    width: 164px;
    height: 40px;
    font-size:16px;
    font-weight:700;
    color: var(--text-color);
    border: none;
    margin: 15px;
    background-color: var(--secundary-color);
    border-radius: 5px;
    display: ${props => props.visibilityR };
`;

export const ButtonL = styled.button`
    width: 164px;
    height: 40px;
    font-size:16px;
    font-weight:700;
    color: var(--text-color);
    border: none;
    margin: 15px;
    background-color: var(--secundary-color);
    border-radius: 5px;
    display: ${props => props.visibilityL };
`;

export const Container1 = styled.div`
    display: flex;
    width: 50%;
    align-items: end;
    margin-left:15px;
`;

export const Container2 = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    right: ${props => props.open ? '-18px' : '-100%'};
    width: 100%;
    top: 110px;
    position: absolute;
    flex-direction: column;
    transition: 0.5s all ease;
    align-items: flex-end;
    justify-content: flex-start;
    background-color:var(--primary-color);
    height: 26vh;
    opacity: 0.8;
    margin-right: 15px;

    @media ${device.tablet} { 
        
        display: flex;
        width: 30%;
        height: 110px;
        justify-content: end;
        right: 0;
        top: 0;
        flex-direction: row;

    }
    
`;


export const ContUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
    margin: 10px;

    & p{
        color: whitesmoke;
    }

   & hr{
        height: 50px;
        margin-right: 5px;
    }

    @media ${device.tablet} { 
        width: 43%;

        & p{
            font-size: 20px;
        }

        & hr{
            height: 60px;
            margin-right: 15px;
        }

    }

    @media ${device.laptopL} { 
        width: 43%;

        & p{
            margin-right: 10px;
            font-size: 24px;
        }

        & hr{
            height: 50px;
            margin-right: 15px;
        }

    }
`;

export const Span = styled.span `
    background-color: var(--secundary-color);
    color: var(--text-color);
    height: 22px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoran: center;
    margin-right: 10px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;

    @media ${device.tablet} { 
        font-size: 20px;
        width: 40px;
        height: 40px;
    }

    
`;

export const P = styled.p `
    font-size: 14px;
    color: var(--secundary-color);
    font-weight: bold;

    @media ${device.tablet} { 
        font-size: 16px;
    }

    @media ${device.laptopL} { 
        font-size: 22px;
    }

    @media ${device.mobileM} {
        display:none;
    }
    
`;

export const Data = styled.p`
    color: var(--text-color);
    font-size: 14px;
    font-weight: 500;
`;

export const Close = styled.p`
    align-self: flex-start;
    margin-bottom: 50px;
    font-weight: 700;
    color: var(--text-color);
    cursor: pointer;
    font-size: 18px;

    @media ${device.tablet} { 
        font-size: 25px;
    }
`;
