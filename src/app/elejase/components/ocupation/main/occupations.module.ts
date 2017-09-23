import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { Routes, RouterModule }         from "@angular/router";
import { FormsModule }                  from "@angular/forms";
import { AppHttpService }               from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule }    from "../../../../settings/app-shared-components/app-shared-components.module";
import { OccupationsComponent }         from "./occupations.component";
import { OccupationsNewComponent }      from "../new/occupations-new.component";
import { OccupationsViewComponent }     from "../view/occupations-view.component";
import { OccupationsEditComponent }     from "../edit/occupations-edit.component";


const appRoutes: Routes = [
    {
        path: 'occupations',
        component: OccupationsComponent
    },

    {
        path: 'occupations/new',
        component: OccupationsNewComponent
    },
    {
        path: 'occupations/:id',
        component: OccupationsViewComponent
    },
    {
        path: 'occupations/:id/edit',
        component: OccupationsEditComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        AppSharedComponentsModule
    ],
    declarations: [
        OccupationsComponent,
        OccupationsNewComponent,
        OccupationsViewComponent,
        OccupationsEditComponent
    ],
    providers: [AppHttpService],
})
export class OccupationsModule {
}
