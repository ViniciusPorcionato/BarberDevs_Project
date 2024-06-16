import axios from "axios";

const portaAPI = '5279';

const ipViniciusP = '192.168.10.139';

const apiUrlLocal = `http://${ipViniciusP}:${portaAPI}/api`

const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;