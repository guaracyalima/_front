import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
    selector: 'app-plans-new',
    templateUrl: './plans-new.component.html',
    styleUrls: ['./plans-new.component.css']
})
export class PlansNewComponent implements OnInit {

    title = "Cadastro de novos planos";

    public plan: Object = {}

    constructor(private httpService: AppHttpService,
                private router: Router,) {
    }

    ngOnInit() {
    }

    save() {

        this.httpService.builder('plans')
            .store(this.plan)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Plano cadastrado com sucesso!',
                    'success'
                )
                this.router.navigate(['/plans/']);
            })
    }

}
