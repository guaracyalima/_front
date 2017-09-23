import { Component, OnInit }  from '@angular/core';
import { AppHttpService }     from "../../settings/services/app-http.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard - administrativo';
  public politics: Array<Object>;
  public voters: Array<Object>;
  public politicsToDash;
  public votersToDash;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.listPolitics()
      this.listVoters();
  }

  listPolitics() {
    this.httpService.builder('candidates')
    .list()
    .then((res) => {
      this.politics = res.data;
      this.politicsToDash = this.politics.length
    })
  }

  // listUsers() {
  //   this.httpService.builder('voters')
  //   .list()
  //   .then((res) => {
  //     this.politics = res;
  //     this.usersToDash = this.users.length
  //   })
  // }

    listVoters() {
        this.httpService.builder('voters')
            .list()
            .then((res) => {
                this.voters = res.data;
                this.votersToDash = this.voters.length
            })
    }

}
