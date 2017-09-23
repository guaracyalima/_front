import { Component, OnInit }    from "@angular/core";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
    selector: 'app-occupations',
    templateUrl: 'occupations.component.html',
    styleUrls: ['occupations.component.css']
})
export class OccupationsComponent implements OnInit {

    public occupations: Array<Object>;

    constructor(private httpService: AppHttpService) {
    }

    ngOnInit() {
        this.list();
    }

    list() {
        this.httpService.builder('occupations')
            .list()
            .then((res) => {
                this.occupations = res;
            })
    }

    delete(id: number) {
        this.httpService.builder('occupations')
            .delete(id)
            .then((res) => {
                console.log('Profissão excluido com sucesso');
            })
    }

    pageChanged(data: any){
        this.occupations = data;
    }

}
