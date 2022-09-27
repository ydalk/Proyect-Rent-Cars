import styled from 'styled-components';
//import { device} from '../../Styled'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;



export const DivTable = styled.div` 
    display: flex;
    justify-content: center;
    width: 100%;

`;

export const Th = styled.th`
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding: 10px 6px;
    background-color: #008CBA;
    color: white;
`;

export const Tr = styled.tr`

    background-color: white;

    &:nth-child(even){
        background-color: #dddddd70;
    }    

    &:hover {
        background-color: #c6c6c5;
    }
`;

export const Td = styled.td`
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding: 10px 6px;
`;


export const Icon = styled.img`
    width: 25px;
    display: block;
    margin: 0 auto;
   
`;

export const Table = styled.table`
    border-collapse: collapse;
    color: black;
    border-radius:10px;
`;

export const Caption = styled.caption`
    padding: 20px;
    font-size: 25px;
    caption-side: top;
`;

export const BtnIco = styled.button`
    border: red;
    margin: 0 10px;
    background-color: transparent;

`;

export const DivForm = styled.div`
    position: absolute; 
    display: ${props => props.open ? 'flex' : 'none'};
    right: ${props => props.open ? '40%' : '-100%'};
    width: 350px;
    height: 500px;
    border-radius: 10px;
    background-color: whitesmoke;
    border: 1px solid #c6c6c5;
      
`;

