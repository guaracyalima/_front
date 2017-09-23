import { Component, OnInit }       from '@angular/core';
import { AppHttpService }          from "../../../../../settings/services/app-http.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('contacts')
        .list()
        .then((res) => {
          this.contacts = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('contacts')
        .delete(id)
        .then((res) => {
          console.log('Contato excluido com sucesso');
        })
  }

}
