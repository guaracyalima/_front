import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-jobs-new',
  templateUrl: './jobs-new.component.html',
  styleUrls: ['./jobs-new.component.css']
})
export class JobsNewComponent implements OnInit {

  public job: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('jobs')
        .store(this.job)
        .then((res) => {
          swal(
              'Sucesso...',
              'Job cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/jobs/']);
        })
  }


}
