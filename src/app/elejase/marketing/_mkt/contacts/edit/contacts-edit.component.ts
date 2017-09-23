import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../../settings/services/app-http.service";

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  public contact: Object = {
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
    this.httpService.builder('contacts')
        .view(id)
        .then((res) => {
          this.contact = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('contacts')
        .update(id, this.contact)
        .then((res) => {
          swal(
              'Sucesso...',
              'Aleteração realizada com sucesso!',
              'success'
          );
          this.router.navigate(['/contacts/' + id]);
        })
  }

}
