import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppHttpService} from "../services/app-http.service";

@Component({
    selector: 'app-app-paginator',
    templateUrl: './pg.html',
    styleUrls: ['./app-paginator.component.css']

})
export class AppPaginatorComponent{

    @Input() total: number;
    @Input() activePage: number;
    @Input() totalPage: number;
    @Input() pages: Array<number>;
    @Input() resource: string;
    @Output() onChangePage = new EventEmitter<boolean>();

    constructor(private httpService: AppHttpService) {}

    ngOnChanges(changes: any) {
        if (changes.totalPage) {
            this.pages = Array(this.totalPage)
                .fill(this.totalPage)
                .map((x, i) => {
                    return i + 1;
                })
        }
    }

    changePage(page: number) {
        this.activePage = page;
        this.httpService.builder(this.resource).list({page: page})
            .then((res) => {
                this.onChangePage.emit(res)
            })
    }
}
