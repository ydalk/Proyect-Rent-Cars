import { Container, Wrapper, Img } from "../footer/FotterStyle"
import facebook from '../../../assets/images/facebook.png'
import linkedin from '../../../assets/images/linkedin.png'
import twiter from '../../../assets/images/tweet.png'
import instagram from '../../../assets/images/ig.png'

export const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>©2022 Rent Cars </p>
      </div>
      <Container>
        <Img src={facebook} alt='facebook'/>
        <Img src={linkedin} alt='facebook'/>
        <Img src={twiter} alt='facebook'/>
        <Img src={instagram} alt='facebook'/>
      </Container>
      
    </Wrapper>
  )
}
