import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {

    title = 'Gerenciamento de pacotes adicionais';

    public packages: Array<Object>;

    constructor(private httpService: AppHttpService) {
        this.list();
    }


    list() {
        this.httpService.builder('packages')
            .list()
            .then((res) => {
                this.packages = res;
            })
    }

    delete(id: number) {
        this.httpService.builder('packages')
            .delete(id)
            .then((res) => {
            })
    }


    pageChanged(data: any){
        this.packages = data;
    }

}
