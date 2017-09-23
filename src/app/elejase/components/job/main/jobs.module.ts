import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Routes, RouterModule }   from "@angular/router";
import { FormsModule }            from "@angular/forms";
import { AppHttpService }         from "../../../../settings/services/app-http.service";
import { JobsComponent }          from "./jobs.component";
import { JobsNewComponent }       from "../new/jobs-new.component";
import { JobsViewComponent }      from "../view/jobs-view.component";
import { JobsEditComponent }      from "../edit/jobs-edit.component";


const appRoutes: Routes = [

  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'jobs/new',
    component: JobsNewComponent
  },
  {
    path: 'jobs/:id',
    component: JobsViewComponent
  },
  {
    path: 'jobs/:id/edit',
    component: JobsEditComponent
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    JobsComponent,
    JobsNewComponent,
    JobsViewComponent,
    JobsEditComponent
  ],
  providers: [AppHttpService],
})
export class JobsModule { }
