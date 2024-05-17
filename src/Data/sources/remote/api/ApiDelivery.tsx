import axios from "axios";
import { LOCAL_HOST } from "@env";
const host = LOCAL_HOST;
//cambiar despues 
const ApiDelivery = axios.create({
    baseURL: host,
    headers: {
        'Content-type': 'application/json'
    }
    
});

export { ApiDelivery }