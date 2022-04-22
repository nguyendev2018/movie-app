import Axios from 'axios';
import { DOMAIN, DOMAIN_MOVIE, TOKEN } from '../utils/settingSystem';
// create class object
export class BaseServices {
    get = (url) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: "PUT",
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: "POST",
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    delete = (url, model) => {
        return Axios({
            url: `${DOMAIN_MOVIE}/${url}`,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}