import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ContributorsComponent} from "./contributors.component";
import {ContributorsNewComponent} from "../new/contributors-new.component";
import {ContribuitorsViewComponent} from "../view/contribuitors-view.component";
import {ContributorsEditComponent} from "../edit/contributors-edit.component";
import {AppSharedComponentsModule} from "../../../../settings/app-shared-components/app-shared-components.module";
import {ColaboratorPipe} from "./colaborator.pipe";
import {AppHttpService} from "../../../../settings/services/app-http.service";
import {MaterialComponentsModule} from "../../../../material-components.module";

const appRoutes: Routes = [
    {
        path: 'contributors',
        component: ContributorsComponent
    },
    {
        path: 'contributors/new',
        component: ContributorsNewComponent
    },
    {
        path: 'contributors/:id',
        component: ContribuitorsViewComponent
    },
    {
        path: 'contributors/:id/edit',
        component: ContributorsEditComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      AppSharedComponentsModule,
      MaterialComponentsModule
  ],
  declarations: [
      ContributorsComponent,
      ContributorsNewComponent,
      ContributorsEditComponent,
      ContribuitorsViewComponent,
      ColaboratorPipe
  ],
    providers: [AppHttpService],
})
export class ContributorsModule { }
