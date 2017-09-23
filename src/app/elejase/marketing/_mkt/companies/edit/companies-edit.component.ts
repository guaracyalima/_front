import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Router }       from "@angular/router";
import   swal                           from 'sweetalert2';
import { AppHttpService }               from "../../../../../settings/services/app-http.service";

@Component({
  selector: 'app-companies-edit',
  templateUrl: './companies-edit.component.html',
  styleUrls: ['./companies-edit.component.css']
})
export class CompaniesEditComponent implements OnInit {

  public companie: Object = {
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
    this.httpService.builder('companies')
        .view(id)
        .then((res) => {
          this.companie = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('companies')
        .update(id, this.companie)
        .then((res) => {
          swal(
              'Sucesso...',
              'Aleteração realizada com sucesso!',
              'success'
          );
          this.router.navigate(['/companies/' + id]);
        })
  }

}
