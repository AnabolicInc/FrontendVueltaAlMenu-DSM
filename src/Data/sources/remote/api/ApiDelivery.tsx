import axios from "axios";
import { LOCAL_HOST, HOST_EMULATOR } from "@env";

const ApiDelivery = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

export { ApiDelivery }