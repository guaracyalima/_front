import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from "@angular/router";
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-addresses-view',
  templateUrl: './addresses-view.component.html',
  styleUrls: ['./addresses-view.component.css']
})
export class AddressesViewComponent implements OnInit {

  public address: Object = {
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
    this.httpService.builder('addresses')
        .view(id)
        .then((res) => {
          this.address = res;
        })
  }

}
