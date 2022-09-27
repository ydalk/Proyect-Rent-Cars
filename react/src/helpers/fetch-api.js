
import configEnvironment  from "../config/config.json";


export const fetchAPI = () => {

    const get = async  ( path ) => {
        let url = configEnvironment.API_URL + path; 
        const response = await fetch(url)
        const result = await response.json()
        return result;
    };
    
    return { get}
}



