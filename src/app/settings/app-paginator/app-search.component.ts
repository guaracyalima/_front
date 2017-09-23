import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppHttpService} from "../services/app-http.service";


@Component({
    selector: 'search',
    templateUrl: './app-search.component.html',
    styleUrls: ['./app-paginator.component.css']

})
export class AppSearchComponent{

    @Input() resource: string;
    @Output() onSearch = new EventEmitter<boolean>();

    constructor(private httpService: AppHttpService) {}

    search(term: string) {
        console.log('tromod e busca',term)
    }
}
