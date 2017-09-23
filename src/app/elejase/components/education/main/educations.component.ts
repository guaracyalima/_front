import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  public educations: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('educations')
        .list()
        .then((res) => {
          this.educations = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('educations')
        .delete(id)
        .then((res) => {
          console.log('Nivel de educação excluido com sucesso');
        })
  }

    pageChanged(data: any){
        this.educations = data;
    }

}
