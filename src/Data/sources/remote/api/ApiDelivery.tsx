import axios from "axios";
import { LOCAL_HOST } from "@env";

const ApiDelivery = axios.create({
    baseURL: LOCAL_HOST,
    headers: {
        'Content-type': 'application/json'
    }
    
});

export { ApiDelivery }