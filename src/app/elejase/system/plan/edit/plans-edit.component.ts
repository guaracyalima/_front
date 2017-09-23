import { Component, OnInit }            from '@angular/core';
import   swal                           from 'sweetalert2';
import { ActivatedRoute, Router }       from "@angular/router";
import { AppHttpService }               from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-plans-edit',
  templateUrl: './plans-edit.component.html',
  styleUrls: ['./plans-edit.component.css']
})
export class PlansEditComponent implements OnInit {


    public politic: Object = { }
    public user: Array<Object>;
    public plans: Array<Object>;
    public states: Array<Object>;
    public cities: Array<Object>;

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
    view(id: number) {
        this.httpService.builder('candidates')
            .view(id)
            .then((data) => {
                this.politic = data.data.data;
                console.log(this.politic)
            })
    }
    save(id: number){
        console.log(this.politic)
        console.log(id)
        this.httpService.builder('candidates')
            .update(id, this.politic)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Aleteração realizada com sucesso!',
                    'success'
                );
                this.router.navigate(['/politics/' + id]);
            })
    }


}
