import { Component, OnInit } 	from '@angular/core';
import { AppHttpService } 		from "../../../../settings/services/app-http.service";


@Component({
	selector: 'app-states',
	templateUrl: './states.component.html',
	styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

	public states: Array<Object>;
	constructor(private httpService: AppHttpService) {}

	ngOnInit() {
		this.list();
	}

	/**
	 * Função de listagem de dados
	 *
	 */
	list() {
    this.httpService.builder('states')
        .list()
        .then((res) => {
          this.states = res;
        })
  }

    pageChanged(data: any){
        this.states = data;
    }


}
