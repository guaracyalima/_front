import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {

    title = "Gerenciamento de Eleitores";

  public voters: Array<Object>;

  constructor(private httpService: AppHttpService) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.httpService.builder('voters')
        .list()
        .then((res) => {
          this.voters = res;
        })
  }

    pageChanged(data: any){
        this.voters = data;
    }

}
