import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppHttpService} from "../../settings/services/app-http.service";

interface User {
    email?: string;
    password?: string;
}
@Component({
    selector: 'app-login',
    //templateUrl: './login.html',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public user: User = {};

    constructor(
        private httpService: AppHttpService,
        private router: Router
    ) {
    }

    public login() {
        let auth = {
            email: this.user.email,
            password: this.user.password
        };
        this.httpService.builder('auth')
            .store(auth)
            .then((res) => {
                localStorage['tokens'] = JSON.stringify(res)
                this.httpService.setAccessToken(res.token)
                this.router.navigate(['/'])
            })
    }
}
