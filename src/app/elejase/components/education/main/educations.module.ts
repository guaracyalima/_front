import { NgModule }                             from '@angular/core';
import { CommonModule }                         from '@angular/common';
import { Routes, RouterModule }                 from "@angular/router";
import { FormsModule }                          from "@angular/forms";
import { AppHttpService }                       from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule }            from "../../../../settings/app-shared-components/app-shared-components.module";
import { EducationsComponent }                  from "./educations.component";
import { EducationsNewComponent }               from "../new/educations-new.component";
import { EducationsEditComponent }              from "../edit/educations-edit.component";
import { EducationsViewComponent }              from "../view/educations-view.component";


const appRoutes: Routes = [

    {
        path: 'educations',
        component: EducationsComponent
    },
    {
        path: 'educations/new',
        component: EducationsNewComponent
    },
    {
        path: 'educations/:id',
        component: EducationsViewComponent
    },
    {
        path: 'educations/:id/edit',
        component: EducationsEditComponent
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
        EducationsComponent,
        EducationsNewComponent,
        EducationsEditComponent,
        EducationsViewComponent
    ],
    providers: [AppHttpService],
})
export class EducationsModule {
}
