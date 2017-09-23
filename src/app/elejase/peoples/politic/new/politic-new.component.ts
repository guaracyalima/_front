import { Component, OnInit} from '@angular/core';
import { Router}            from '@angular/router';
import   swal               from 'sweetalert2';
import { AppHttpService}    from "../../../../settings/services/app-http.service";


@Component({
    selector: 'app-politic-new',
    templateUrl: './politic-new.component.html',
    styleUrls: ['./politic-new.component.css']
})
export class PoliticNewComponent implements OnInit {
    title = "Cadastro de candidatos";

    public politic: Object = {

    }

    public user: Array<Object>;
    public plans: Array<Object>;
    public states: Array<Object>;
    public cities: Array<Object>;

    constructor(private httpService: AppHttpService,
                private router: Router,) {
    }

    ngOnInit() {
        this.lisUsers();
        this.lisPlans();
        this.lisStates();
        this.lisCities();
    }


    lisUsers() {
        this.httpService.builder('users')
            .list()
            .then((res) => {
                this.user = res.data
            })
    }

    lisPlans() {
        this.httpService.builder('plans')
            .list()
            .then((res) => {
                this.plans = res.data
            })
    }

    lisStates() {
        this.httpService.builder('states')
            .list()
            .then((res) => {
                this.states = res.data
            })
    }

    lisCities() {
        this.httpService.builder('cities')
            .list()
            .then((res) => {
                this.cities = res.data
            })
    }

    save() {
        this.httpService.builder('candidates')
            .store(this.politic)
            .then(() => {
                swal(
                    'Sucesso...',
                    'Politico cadastrado com sucesso!',
                    'success'
                )
                this.router.navigate(['/politics/']);
            })
    }

}
