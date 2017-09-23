import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-voters-view',
  templateUrl: './voters-view.component.html',
  styleUrls: ['./voters-view.component.css']
})
export class VotersViewComponent implements OnInit {

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
        this.httpService.builder('voters')
            .view(id)
            .then((data) => {
                this.politic = data.voter;
                console.log('voet', this.politic)
            })
    }

}
