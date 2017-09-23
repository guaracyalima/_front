import { Component, OnInit }  from '@angular/core';
import { AppHttpService }     from "../../../../settings/services/app-http.service";



@Component({
  selector: 'app-politic',
  templateUrl: './politic.component.html',
  styleUrls: ['./politic.component.css']
})
export class PoliticComponent {

  title = 'Gerenciamento de candidatos';

  public politics = [];
  public pol: Array<Object>;
  public pagina:Array<Object>;
  public qtdPorPagina: number = 21;

  constructor(private httpService: AppHttpService) {
      this.list();
  }


  list() {
    this.httpService.builder('candidates')
        .list()
        .then((res) => {
          this.pol = res;
    })
  }

  delete(id: number) {
    this.httpService.builder('candidates')
        .delete(id)
        .then((res) => {
        })
  }


  pageChanged(data: any){
      this.pol = data;
  }


}
