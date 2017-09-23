import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { Routes, RouterModule }         from "@angular/router";
import { FormsModule }                  from "@angular/forms";
import { AppHttpService }               from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule }    from "../../../../settings/app-shared-components/app-shared-components.module";
import { PlansComponent }               from "./plans.component";
import { PlansEditComponent }           from "../edit/plans-edit.component";
import { PlansNewComponent }            from "../new/plans-new.component";
import { PlansViewComponent }           from "../view/plans-view.component";


const appRoutes: Routes = [
    {
        path: 'plans',
        component: PlansComponent
    },
    {
        path: 'plans/new',
        component: PlansNewComponent
    },
    {
        path: 'plans/:id',
        component: PlansEditComponent
    },

    {
        path: 'plans/:id/edit',
        component: PlansViewComponent
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
        PlansComponent,
        PlansEditComponent,
        PlansNewComponent,
        PlansViewComponent
    ],
    providers: [AppHttpService]
})
export class PlansModule {
}
