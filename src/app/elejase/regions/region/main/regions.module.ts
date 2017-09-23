import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule, Routes }             from "@angular/router";
import { FormsModule }                      from "@angular/forms";
import { HttpModule }                       from "@angular/http";
import { AppSharedComponentsModule }        from "../../../../settings/app-shared-components/app-shared-components.module";
import { RegionsComponent }                 from "./regions.component";
import { RegionsNewComponent }              from "../new/regions-new.component";
import { RegionsViewComponent }             from "../view/regions-view.component";
import { RegionsEditComponent }             from "../edit/regions-edit.component";


const appRoutes: Routes = [
    {
        path: 'regions',
        component: RegionsComponent
    },
    {
        path: 'regions/new',
        component: RegionsNewComponent
    },
    {
        path: 'regions/:id',
        component: RegionsViewComponent
    },

    {
        path: 'regions/:id/edit',
        component: RegionsEditComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      HttpModule,
      AppSharedComponentsModule
  ],
  declarations: [
      RegionsComponent,
      RegionsNewComponent,
      RegionsViewComponent,
      RegionsEditComponent
  ]
})
export class RegionsModule { }
