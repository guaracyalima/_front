import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../../settings/services/app-http.service";

@Component({
  selector: 'app-companies-new',
  templateUrl: './companies-new.component.html',
  styleUrls: ['./companies-new.component.css']
})
export class CompaniesNewComponent implements OnInit {

  public companie: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('companies')
        .store(this.companie)
        .then((res) => {
          swal(
              'Sucesso...',
              'Compania cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/companies/']);
        })
  }

}
