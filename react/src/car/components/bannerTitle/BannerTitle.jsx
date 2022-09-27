import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import volver from "../../../assets/images/volver.png";
import {
    Wrapper,
    Container1,
    Container2,
    Img,
    SectLocation,
} from "./BannerTitleStyle";


const BannerTitle = ({ autos }) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    let visible = 'flex'

        
    if(pathname === '/admin'){
        visible = 'none'        
    }

    return (
        <>
            <Wrapper>

                <Container1>
                    <p>{autos?.category?.title}</p>
                    <h4>{autos?.name}</h4>
                </Container1>

                <Container2>
                    <Img onClick={() => navigate("/")} src={volver} alt="volver"></Img>
                </Container2>
            </Wrapper>

            <SectLocation visible={visible}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{autos?.location}</p>
            </SectLocation>
        </>
    )
}

export default BannerTitle;