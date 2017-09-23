import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../../settings/services/app-http.service";


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public companies: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('companies')
        .list()
        .then((res) => {
          this.companies = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('companies')
        .delete(id)
        .then((res) => {
          console.log('Compania excluido com sucesso');
        })
  }

}
