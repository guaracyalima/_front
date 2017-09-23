import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import   swal                           from 'sweetalert2';
import { AppHttpService }               from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-segments-edit',
  templateUrl: './segments-edit.component.html',
  styleUrls: ['./segments-edit.component.css']
})
export class SegmentsEditComponent implements OnInit {

  public segment: Object = {
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
    this.httpService.builder('segments')
        .view(id)
        .then((res) => {
          this.segment = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('segments')
        .update(id, this.segment)
        .then((res) => {
          swal(
              'Sucesso...',
              'Aleteração realizada com sucesso!',
              'success'
          );
          this.router.navigate(['/segments/' + id]);
        })
  }

}
