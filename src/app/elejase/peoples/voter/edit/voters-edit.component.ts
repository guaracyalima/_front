import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-voters-edit',
  templateUrl: './voters-edit.component.html',
  styleUrls: ['./voters-edit.component.css']
})
export class VotersEditComponent implements OnInit {

  public voter: Object = {
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
    this.httpService.builder('votes')
        .view(id)
        .then((res) => {
          this.voter = res;
        })
  }
  save(id: number){
    console.log(id)
    this.httpService.builder('voters')
        .update(id, this.voter)
        .then((res) => {
            swal(
                'Sucesso...',
                'Alteração realizada com sucesso!',
                'success'
            );
          this.router.navigate(['/voters/' + id]);
        })
  }

}
