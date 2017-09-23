import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AppHttpService }           from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-politic-view',
  templateUrl: './politic-view.component.html',
  styleUrls: ['./politic-view.component.css']
})

export class PoliticViewComponent implements OnInit {

  public politic: Object = {
    data: {}
  }
  constructor(
  	private httpService: AppHttpService,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.route.params
    .subscribe((params:any) => {
      this.view(params.id);
    });

  }

  view(id: number) {
  	this.httpService.builder('candidates')
    .view(id)
    .then((data) => {
      this.politic = data.data;
      console.log('thispuliticu',this.politic);
    })
  }

}
