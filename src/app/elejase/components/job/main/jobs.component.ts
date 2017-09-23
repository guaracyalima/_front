import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('jobs')
        .list()
        .then((res) => {
          this.jobs = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('jobs')
        .delete(id)
        .then((res) => {
          console.log('Job excluido com sucesso');
        })
  }

}
