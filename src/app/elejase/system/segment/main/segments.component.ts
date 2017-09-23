import { Component, OnInit }    from '@angular/core';
import { AppHttpService }       from "../../../../settings/services/app-http.service";


@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {

  public segments: Array<Object>;

  constructor(private httpService: AppHttpService) {}
  ngOnInit() {
    this.list();
  }
  list() {
    this.httpService.builder('segments')
        .list()
        .then((res) => {
          this.segments = res;
        })
  }

  delete(id: number) {
    this.httpService.builder('segments')
        .delete(id)
        .then((res) => {
          console.log('Segmento excluido com sucesso');
        })
  }

}
