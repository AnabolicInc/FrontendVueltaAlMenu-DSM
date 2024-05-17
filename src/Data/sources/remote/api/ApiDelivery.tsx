import axios from "axios";
import { LOCAL_HOST } from "@env";
const host = LOCAL_HOST;
const ApiDelivery = axios.create({
    baseURL: host,
    headers: {
        'Content-type': 'application/json'
    }
    
});

export { ApiDelivery }