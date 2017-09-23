import { Component, OnInit }        from "@angular/core";
import { Router }                   from "@angular/router";
import   swal                       from "sweetalert2";
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
    selector: 'app-educations-new',
    templateUrl: './educations-new.component.html',
    styleUrls: ['./educations-new.component.css']
})
export class EducationsNewComponent implements OnInit {
    public education: Object = {
        data: {}
    }
    constructor(private httpService: AppHttpService,
                private router: Router,) {
    }

    ngOnInit() {
    }
    save() {

        this.httpService.builder('educations')
            .store(this.education)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Escolaridade cadastrada com sucesso!',
                    'success'
                )
                this.router.navigate(['/educations/']);
            })

    }
}