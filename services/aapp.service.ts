import Axios from 'axios';

export class AppService {

    private axios;
    
    constructor(){
        this.axios = Axios.create({
            baseURL: "http://localhost:8000/api",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });
    }

    getUser(){
        let _user = localStorage.getItem("user");
       return _user !== null ? JSON.parse(_user) : null; 
    }

    get(endpoint, params, requireAuth = false){
        let _urlParams = new URLSearchParams(params);
        let headers = {};
        if(requireAuth)
            headers = {'headers': 'Authorization: bearer ' + this.getUser().api_token };
        return this.axios.get(endpoint + '?' + _urlParams.toString(), headers);
    }

    post(endpoint, params, requireAuth = false){
        let headers = {};
        if(requireAuth)
            headers = {'headers': 'Authorization: bearer ' + this.getUser().api_token };
        return this.axios.get(endpoint, params, headers);
    }

    put(endpoint, params, requireAuth = false){
        let headers = {};
        if(requireAuth)
            headers = {'headers': 'Authorization: bearer ' + this.getUser().api_token };
        return this.axios.put(endpoint, params, headers);
    }

    delete(endpoint, params, requireAuth = false){
        let _urlParams = new URLSearchParams(params);
        let headers = {};
        if(requireAuth)
            headers = {'headers': 'Authorization: bearer ' + this.getUser().api_token };
        return this.axios.delete(endpoint + '?' + _urlParams.toString(), headers);
    }

}
