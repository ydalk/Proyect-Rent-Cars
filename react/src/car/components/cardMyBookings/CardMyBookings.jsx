import { Images } from '../images/Images';
import { Stars, Location, BoxSection, Container1, Container2, WrapInput, Hr } from './CardMyBookingsStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const CardMyBookings = ({ item }) => {

    return (
        <>
            <BoxSection>
                <Images id={item.product.id} />

                <Container1>
                    <Location>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h5>{item.product.location}</h5>
                    </Location>
                </Container1>

                <Container2>
                    <WrapInput>
                        <h5>Seguridad </h5>
                        <div>
                            <Stars icon={faStar} />
                            <Stars icon={faStar} />
                            <Stars icon={faStar} />
                            <Stars icon={faStar} />
                            <Stars icon={faStar} />
                        </div>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Categoria </h5>
                        <p>{item?.product.category.title}</p>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Modelo </h5>
                        <p>{item?.product.name}</p>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Ciudad </h5>
                        <p>{item?.product.city.name}</p>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Fecha de entrega </h5>
                        <p>{item.startDate}</p>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Fecha de devolución </h5>
                        <p>{item.endDate}</p>
                    </WrapInput>
                    <Hr />

                    <WrapInput>
                        <h5>Hora de entrega </h5>
                        <p>{item.startTime}</p>
                    </WrapInput>

                </Container2>
            </BoxSection>
        </>
    )
}

export default CardMyBookings;