import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
	public plans: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }

  list() {
    this.httpService.builder('plans')
        .list()
        .then((res) => {
          this.plans = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('plans')
        .delete(id)
        .then((res) => {
          console.log('Politico excluido com sucesso');
        })
  }

    pageChanged(data: any){
        this.plans = data;
    }
}
