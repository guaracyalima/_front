import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import   swal                           from 'sweetalert2';
import { AppHttpService }               from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-addresses-edit',
  templateUrl: './addresses-edit.component.html',
  styleUrls: ['./addresses-edit.component.css']
})
export class AddressesEditComponent implements OnInit {

  public address: Object = {
    data: {}
  }
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
    this.httpService.builder('addresses')
        .view(id)
        .then((res) => {
          this.address = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('addresses')
        .update(id, this.address)
        .then((res) => {
          swal(
              'Sucesso...',
              'Aleteração realizada com sucesso!',
              'success'
          );
          this.router.navigate(['/addresses/' + id]);
        })
  }

}
