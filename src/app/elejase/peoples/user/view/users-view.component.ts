import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

    public user: Object = {
        data: {}
    }
    constructor(
        private httpService: AppHttpService,
        private route: ActivatedRoute
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
                this.user = res;
            })
    }

}
