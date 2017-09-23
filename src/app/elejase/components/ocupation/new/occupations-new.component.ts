import { Component, OnInit }    from '@angular/core';
import { Router }               from "@angular/router";
import   swal                   from 'sweetalert2';
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-occupations-new',
  templateUrl: 'occupations-new.component.html',
  styleUrls: ['occupations-new.component.css']
})
export class OccupationsNewComponent implements OnInit {
  public occupation: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('occupations')
        .store(this.occupation)
        .then((res) => {
          swal(
              'Sucesso...',
              'Profissão cadastrada com sucesso!',
              'success'
          )
          this.router.navigate(['/occupations/']);
        })
  }
}
