import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../../settings/services/app-http.service";

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.css']
})
export class CompaniesViewComponent implements OnInit {

  public companie: Object = {
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
    this.httpService.builder('companies')
        .view(id)
        .then((res) => {
          this.companie = res;
        })
  }

}
