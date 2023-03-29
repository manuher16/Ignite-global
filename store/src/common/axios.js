import axios from "axios"

import { CONFIG_SERVER } from "./environment "

const instance = axios.create({
    baseURL: CONFIG_SERVER.URL_API,
    headers: {
        'X-Auth-Token': CONFIG_SERVER.ACCESS_TOKEN
    }
});


export default instance