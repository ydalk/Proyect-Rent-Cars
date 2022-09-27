import {Images} from '../images/Images'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { BoxCard, Title, BoxDetail, ButtonCard, Location, Wrap1, Wrap2, Category, WrapStars,  Stars, Cta, Description } from "./ProductStyle";
import { useNavigate } from 'react-router-dom';
import { Feature } from '../feature/Feature';

const Product = ( { car } ) => {
    
    const navigate = useNavigate();

    return (
        <BoxCard>
            <Images id={car.id}/>
            <BoxDetail>
                <Wrap1>
                    <Category>
                        {car?.category?.title}
                    </Category>

                    <WrapStars>
                    <div>
                        <Stars icon={ faStar } />
                        <Stars icon={ faStar } />
                        <Stars icon={ faStar } />
                        <Stars icon={ faStar } />
                        <Stars icon={ faStar } />
                    </div>
                        <p>Seguridad</p>
                    </WrapStars>
                </Wrap1>

                <Wrap2>
                    <Title> { car.name } </Title>
                    <Location>
                        <FontAwesomeIcon icon={ faLocationDot } />
                        <p>{ car.location }</p>
                        <Cta> Ver en el mapa </Cta>
                    </Location>
                </Wrap2>

                <Feature key={car.id} id={car.id}/>
                        
                <Description>{car.description} <Cta>ver más</Cta> </Description>

                <ButtonCard name ={"ver"+car.id} data={car}  onClick={ () => navigate (`detail/${car.id}` )} >ver detalle</ButtonCard>
            </BoxDetail>

        </BoxCard>
    );
};

export default Product;


