import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
    selector: 'app-educations-view',
    templateUrl: './educations-view.component.html',
    styleUrls: ['./educations-view.component.css']
})
export class EducationsViewComponent implements OnInit {


    public education: Object = {
        data: {}
    }

    constructor(private httpService: AppHttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            });

    }

    view(id: number) {
        this.httpService.builder('educations')
            .view(id)
            .then((res) => {
                this.education = res;
            })
    }


}
