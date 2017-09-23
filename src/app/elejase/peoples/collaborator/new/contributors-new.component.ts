import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import swal  from 'sweetalert2';
import {AppHttpService} from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-contributors-new',
  templateUrl: './new.component.html',
  styleUrls: ['./contributors-new.component.css']
})
export class ContributorsNewComponent implements OnInit {

    title = "Cadastro de colaborades";

    public colaborator: Object = {}

    public user: Array<Object>;
    public states: Array<Object>;
    public cities: Array<Object>;

    constructor(
        private httpService: AppHttpService,
        private router: Router,

    ) { }

    ngOnInit() {
        this.lisUsers();
        this.lisStates();
        this.lisCities();
    }


    lisUsers() {
        this.httpService.builder('users')
            .list()
            .then((res) => {
                this.user = res
                console.log(this.user);
            })
    }

    lisStates() {
        this.httpService.builder('states')
            .list()
            .then((res) => {
                this.states = res
            })
    }

    lisCities() {
        this.httpService.builder('cities')
            .list()
            .then((res) => {
                this.cities = res
            })
    }

    save(){
        this.httpService.builder('collaborators')
            .store(this.colaborator)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Colaborador cadastrado com sucesso!',
                    'success'
                )
                this.router.navigate(['/contributors/']);
            })
    }

}
