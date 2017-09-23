import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import swal  from 'sweetalert2';
import {AppHttpService} from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-contributors-edit',
  templateUrl: './contributors-edit.component.html',
  styleUrls: ['./contributors-edit.component.css']
})
export class ContributorsEditComponent implements OnInit {

    public politic: Object = { }


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
        this.httpService.builder('collaborators')
            .view(id)
            .then((data) => {
                this.politic = data.data;
                console.log('culaburator',this.politic)
            })
    }
    save(id: number){
        console.log(this.politic)
        console.log(id)
        this.httpService.builder('collaborators')
            .update(id, this.politic)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Aleteração realizada com sucesso!',
                    'success'
                );
                this.router.navigate(['/contributors/' + id]);
            })
    }

}
