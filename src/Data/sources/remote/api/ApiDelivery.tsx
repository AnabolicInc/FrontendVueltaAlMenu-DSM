import axios from "axios";
import { HOST_EMULATOR } from "@env";
const host = HOST_EMULATOR;
//cambiar despues 
const ApiDelivery = axios.create({
    baseURL: host,
    headers: {
        'Content-type': 'application/json'
    }
    
});

export { ApiDelivery }