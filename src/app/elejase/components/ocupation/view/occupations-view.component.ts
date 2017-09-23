import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-occupations-view',
  templateUrl: 'occupations-view.component.html',
  styleUrls: ['occupations-view.component.css']
})
export class OccupationsViewComponent implements OnInit {

  public occupation: Object = {
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
    this.httpService.builder('occupations')
        .view(id)
        .then((res) => {
          this.occupation = res;
        })
  }

}
