import { Component, OnInit }  from '@angular/core';
import { AppHttpService }     from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Gerenciamento de usuarios do sistema';
  public users: Array<Object>;
  constructor(private httpService: AppHttpService) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.httpService.builder('users')
        .list()
        .then((res) => {
          this.users = res;
        })
  }

    pageChanged(data: any){
        this.users = data;
    }
}
