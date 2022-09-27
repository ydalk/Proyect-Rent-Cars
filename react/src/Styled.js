import styled from "styled-components";


const size = {
    
    mobileM: '425px',
    tablet: '768px',    
    laptopL: '1440px',
}

export const device = {
    
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopL: `(min-width: ${size.laptopL})`,
  };