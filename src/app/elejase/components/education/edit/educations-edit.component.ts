import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import   swal                           from 'sweetalert2';
import { AppHttpService }               from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-educations-edit',
  templateUrl: './educations-edit.component.html',
  styleUrls: ['./educations-edit.component.css']
})
export class EducationsEditComponent implements OnInit {

  public education: Object = {
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
    this.httpService.builder('educations')
        .view(id)
        .then((res) => {
          this.education = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('educations')
        .update(id, this.education)
        .then((res) => {
          swal(
              'Sucesso...',
              'Aleteração realizada com sucesso!',
              'success'
          );
          this.router.navigate(['/educations/' + id]);
        })
  }

}
