import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

    title = 'Regiões';
    public regions: Array<Object>;
    constructor(private httpService: AppHttpService) {
    }

    ngOnInit() {
        this.list();
    }

    list() {
        this.httpService.builder('regions')
            .list()
            .then((res) => {
                this.regions = res;
            })
    }

    delete(id: number) {
        this.httpService.builder('regions')
            .delete(id)
            .then((res) => {

            })
    }

    pageChanged(data: any){
        this.regions = data;
    }

}
