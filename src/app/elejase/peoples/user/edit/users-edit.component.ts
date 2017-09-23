import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import swal                             from 'sweetalert2';
import { AppHttpService }               from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

    public users: Object = {
        data: {}
    }
    constructor(
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe((params:any) => {
                this.view(params.id);
            });

    }
    view(id: number) {
        this.httpService.builder('users')
            .view(id)
            .then((res) => {
                this.users = res;
            })
    }
    save(id: number){
        console.log(id)
        this.httpService.builder('users')
            .update(id, this.users)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Aleteração realizada com sucesso!',
                    'success'
                );
                this.router.navigate(['/users/' + id]);
            })
    }
}
