import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-states-view',
  templateUrl: './states-view.component.html',
  styleUrls: ['./states-view.component.css']
})
export class StatesViewComponent implements OnInit {
  public state: Object = {
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
    this.httpService.builder('states')
        .view(id)
        .then((res) => {
          this.state = res;
        })
  }
}
