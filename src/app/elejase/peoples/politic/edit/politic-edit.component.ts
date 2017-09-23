import { Component, OnInit } 				from '@angular/core';
import { Router, ActivatedRoute, Params} 	from '@angular/router';
import swal  								from 'sweetalert2';
import { AppHttpService	} 					from "../../../../settings/services/app-http.service";


@Component({
	selector: 'app-politic-edit',
	templateUrl: './politic-edit.component.html',
	styleUrls: ['./politic-edit.component.css']
})
export class PoliticEditComponent implements OnInit {

	public plan: Object = { }

	constructor(
		private httpService: AppHttpService,
		private route: ActivatedRoute,
		private router: Router,
		) { }

	ngOnInit() {
		this.route.params
		.subscribe((params:any) => {
			this.view(params.id);
		});

	}

	view(id: number) {
		this.httpService.builder('plans')
		.view(id)
		.then((data) => {
			this.plan = data.data.data;
			console.log(this.plan)
		})
	}
	save(id: number){
		console.log(this.plan)
		console.log(id)
		this.httpService.builder('plans')
			.update(id, this.plan)
			.then((res) => {
				swal(
					'Sucesso...',
					'Aleteração realizada com sucesso!',
					'success'
				);
				this.router.navigate(['/plans/' + id]);
			})
	}

}
