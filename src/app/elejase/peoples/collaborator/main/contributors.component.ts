import { Component, OnInit } from '@angular/core';
import {AppHttpService} from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

    title = 'Colaboradores';
    public colaborators: Array<Object>;
    constructor(private httpService: AppHttpService) {
    }

    ngOnInit() {
        this.list();
    }

    list() {
        this.httpService.builder('collaborators')
            .list()
            .then((res) => {
                this.colaborators = res;
                console.log(this.colaborators);
            })
    }

    pageChanged(data: any){
        this.colaborators = data;
    }
}
