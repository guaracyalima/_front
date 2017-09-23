import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../../settings/services/app-http.service";

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  styleUrls: ['./contacts-new.component.css']
})
export class ContactsNewComponent implements OnInit {

  public contact: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('contacts')
        .store(this.contact)
        .then((res) => {
          swal(
              'Sucesso...',
              'Contato cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/contacts/']);
        })
  }

}
