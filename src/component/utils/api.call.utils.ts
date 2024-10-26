
import axios, { Method, AxiosRequestConfig } from 'axios';
const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer `,
}

export class Request {
    public static call (path: string, method: Method, object: any) {
        let data: any;
        if (typeof (object) === 'object') {
            data = JSON.stringify(object);
        }
        data = object;
        let config: AxiosRequestConfig = {
            method: method,
            maxBodyLength: Infinity,
            url: `${process.env.API_URL}${path}`,
            data: data,
            headers: headers
        };

        return axios.request(config)
    }
}