import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('profiles')
        .list()
        .then((res) => {
          this.profile = res;

        })
  }

  delete(id: number) {
    this.httpService.builder('profiles')
        .delete(id)
        .then((res) => {
          console.log('Perfil excluido com sucesso');
        })
  }
}
