import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";



@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  public addresses: Array<Object>;

  constructor(private httpService: AppHttpService) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.httpService.builder('addresses')
        .list()
        .then((res) => {
          this.addresses = res.data;
        })
  }

  delete(id: number) {
    this.httpService.builder('addresses')
        .delete(id)
        .then((res) => {
          console.log('Endereço excluido com sucesso');
        })
  }

}
