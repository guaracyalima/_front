import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import   swal                           from 'sweetalert2';
import { AppHttpService }               from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-voters-new',
  templateUrl: './voters-new.component.html',
  styleUrls: ['./voters-new.component.css']
})
export class VotersNewComponent implements OnInit {

    sectionTitle = "Cadastro de eleitores";

    public voter: Object = {
        data: {}
    }
    public user: Array<Object>;

    constructor(
        private httpService: AppHttpService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.listTypesUsers();
    }

    listTypesUsers() {
        this.httpService.builder('users')
            .list()
            .then((res) => {
                this.user = res
            })
    }
    save(){

        this.httpService.builder('voters')
            .store(this.voter)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Eleitor cadastrado com sucesso!',
                    'success'
                );
                this.router.navigate(['/voters/']);
            });

    }
}
