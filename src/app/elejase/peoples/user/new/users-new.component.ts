import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
    selector: 'app-users-new',
    templateUrl: './users-new.component.html',
    styleUrls: ['./users-new.component.css'],
})

export class UsersNewComponent implements OnInit {

    public user: Object = { }

    public user_types: Array<Object>;
    public candidate: Array<Object>;
    public address: Array<Object>;
    public occupationss: Array<Object>;

    constructor(private httpService: AppHttpService,
                private router: Router) {
    }

    ngOnInit() {

    }

    save() {

        this.httpService.builder('users')

            .store(this.user)
            .then(() => {
                swal(
                    'Sucesso...',
                    'Usuario cadastrado com sucesso!',
                    'success'
                );
                this.router.navigate(['/users/']);
            })
    }

}
