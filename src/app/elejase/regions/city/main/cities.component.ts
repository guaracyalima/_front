import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

    public cities: Array<Object>;

    constructor(private httpService: AppHttpService) {
    }

    ngOnInit() {
        this.list();
    }

    list() {
        this.httpService.builder('cities')
            .list()
            .then((res) => {
                this.cities = res;
            })
    }

    pageChanged(data: any){
        this.cities = data;
    }
}
