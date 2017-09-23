import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile-new.component.html',
  styleUrls: ['./profile-new.component.css']
})
export class ProfileNewComponent implements OnInit {

  public profile: Object = {
    data: {}
  }
  constructor(
      private httpService: AppHttpService,
      private router: Router,

  ) { }

  ngOnInit() {
  }
  save(){

    this.httpService.builder('profiles')
        .store(this.profile)
        .then((res) => {
          swal(
              'Sucesso...',
              'Perfil cadastrado com sucesso!',
              'success'
          )
          this.router.navigate(['/profiles/']);
        })
  }

}
