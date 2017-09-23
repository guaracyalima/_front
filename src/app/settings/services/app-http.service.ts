import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

interface Options {
    page?: number;
}

interface RequestOptions {
    headers?: any;
}

@Injectable()
export class AppHttpService {

    private url: string;
    //private header: Headers;
    private options: RequestOptions = {};

    // constructor(private http: Http) {
    //   let token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
    //   if (token.token){
    //     this.setAccessToken(token.token);
    //   }
    //
    // }
    // setAccessToken(token: string) {
    //   this.header =  new Headers({'Authorization': 'Bearer ' + token});
    // }
    //
    // builder(resource: string) {
    //   //this.url = 'https://elejaseapi-v1.herokuapp.com/api/' + resource;
    //   this.url = 'http://127.0.0.1:8000/api/' + resource;
    //   return this;
    // }

    constructor(private http: Http) {
    }

    setAccessToken(token: string) {
        let header = new Headers({'Authorization': 'Bearer ' + token});
        this.options.headers = header;
    }

    client(url: string) {
        this.url = 'https://api-vii.herokuapp.com/api/' + url;
        //this.url = 'http://127.0.0.1:8000/api/' + url;
        return this;
    }

    builder(resource: string) {
        this.url = 'https://elejaseapi-v1.herokuapp.com/api/' + resource;
        //this.url = 'https://api-vii.herokuapp.com/api/' + resource;
        this.url = 'http://127.0.0.1:8000/api/' + resource;
        return this;
    }

    list(options: Options = {}) {
        let url = this.url;

        if (options.page === undefined) {
            options.page = 1
        }

        url += '?page=' + options.page;
        console.log('url ',url)

        return this.http.get(url, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })

    }

    view(id: number) {
        return this.http.get(this.url + '/' + id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    update(id: number, data: Object) {
        return this.http.put(this.url + '/' + id, data, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    store(data: Object) {
        return this.http.post(this.url, data, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    delete(id: number) {
        return this.http.delete(this.url + '/' + id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    // list() {
    //   return this.http.get(this.url, {headers: this.header})
    //   .toPromise()
    //   .then((res) => {
    //     return res.json() || {};
    //   })
    // }
    //
    // view(id: number){
    //   return this.http.get(this.url + '/' + id, {headers: this.header})
    //   .toPromise()
    //   .then((res) => {
    //     return res.json() || {};
    //   })
    // }

    // update(id: number, data: Object){
    //   return this.http.put(this.url + '/' + id, data, {headers: this.header})
    //   .toPromise()
    //   .then((res)=> {
    //     return res.json() || {};
    //   })
    // }

    // store(data: Object){
    //   return this.http.post(this.url, data, {headers: this.header})
    //   .toPromise()
    //   .then((res)=> {
    //     return res.json() || {};
    //
    //   })
    // }

    // delete(id: number){
    //   return this.http.delete(this.url + '/' + id, {headers: this.header})
    //   .toPromise()
    //   .then((res) => {
    //     return res.json() || {};
    //   })
    // }
}
