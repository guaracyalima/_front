import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationHttpService extends Http{

  constructor(
      backend: XHRBackend,
      deaultOptions: RequestOptions,
      private router: Router
  ) {
    super(backend, deaultOptions);
  }

  request(url: string | Request, options: RequestOptionsArgs ) : Observable<Response>{
    return super.request(url, options)
        .catch((error: Response) => {
          //if(error.status === 401 || error.status === 400 ){
          if(error.status === 401 || error.status === 400 ){
            this.router.navigate(['/login']);
          }
          return Observable.throw(error);
        });
  }

  // protected refreshToken(){
  //     let auth = {
  //         grant_type: 'refresh_token',
  //
  //     }
  // }
}
