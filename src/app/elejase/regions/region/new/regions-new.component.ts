import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import   swal                       from 'sweetalert2';
import { AppHttpService }           from "../../../../settings/services/app-http.service";

@Component({
  selector: 'app-regions-new',
  templateUrl: './regions-new.component.html',
  styleUrls: ['./regions-new.component.css']
})
export class RegionsNewComponent implements OnInit {
  title = "Nova região";

    public region: Object = {
        data: {}
    }

    constructor(private httpService: AppHttpService,
                private router: Router,) {
    }

    ngOnInit() {

    }

    save() {

        this.httpService.builder('regions')
            .store(this.region)
            .then((res) => {
                swal(
                    'Sucesso...',
                    'Região cadastrado com sucesso!',
                    'success'
                )
                this.router.navigate(['/regions/']);
            })
    }

}
