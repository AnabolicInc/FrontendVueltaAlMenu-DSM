import axios from "axios";
import { LOCAL_HOST } from "@env";

const ApiDelivery = axios.create({
    // baseURL: LOCAL_HOST,
    baseURL: 'http://10.0.2.2:8080/api/', // Para android studio
    headers: {
        'Content-type': 'application/json'
    }
    
});

export { ApiDelivery }