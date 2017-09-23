import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-addresses-new',
  templateUrl: './addresses-new.component.html',
  styleUrls: ['./addresses-new.component.css']
})
export class AddressesNewComponent implements OnInit {

  public address: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('addresses')
        .store(this.address)
        .then((res) => {
          swal(
              'Sucesso...',
              'Endereço cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/addresses/']);
        })
  }


}
