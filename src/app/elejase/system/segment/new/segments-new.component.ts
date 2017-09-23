import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-segments-new',
  templateUrl: './segments-new.component.html',
  styleUrls: ['./segments-new.component.css']
})
export class SegmentsNewComponent implements OnInit {

  public segment: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('segments')
        .store(this.segment)
        .then((res) => {
          swal(
              'Sucesso...',
              'Segmento cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/segments/']);
        })
  }


}
