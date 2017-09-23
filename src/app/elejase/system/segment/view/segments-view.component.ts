import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-segments-view',
  templateUrl: './segments-view.component.html',
  styleUrls: ['./segments-view.component.css']
})
export class SegmentsViewComponent implements OnInit {

  public segment: Object = {
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
    this.httpService.builder('segments')
        .view(id)
        .then((res) => {
          this.segment = res;
        })
  }

}
