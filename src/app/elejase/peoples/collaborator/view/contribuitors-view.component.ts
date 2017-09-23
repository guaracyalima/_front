import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppHttpService} from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-contribuitors-view',
  templateUrl: './contribuitors-view.component.html',
  styleUrls: ['./contribuitors-view.component.css']
})
export class ContribuitorsViewComponent implements OnInit {

    public politic: Object = {
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
        this.httpService.builder('collaborators')
            .view(id)
            .then((data) => {
                this.politic = data.data;
                console.log('thispuliticu',this.politic);
            })
    }

}
