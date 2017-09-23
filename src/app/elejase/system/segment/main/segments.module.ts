import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Routes, RouterModule }   from "@angular/router";
import { SegmentsComponent }      from "./segments.component";
import { FormsModule }            from "@angular/forms";
import { AppHttpService }         from "../../../../settings/services/app-http.service";
import { SegmentsNewComponent }   from "../new/segments-new.component";
import { SegmentsViewComponent }  from "../view/segments-view.component";
import { SegmentsEditComponent }  from "../edit/segments-edit.component";


const appRoutes: Routes = [
  {
    path: 'segments',
    component: SegmentsComponent
  },

  {
    path: 'segments/new',
    component: SegmentsNewComponent
  },
  {
    path: 'segments/:id',
    component: SegmentsViewComponent
  },
  {
    path: 'segments/:id/edit',
    component: SegmentsEditComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    SegmentsComponent,
    SegmentsNewComponent,
    SegmentsViewComponent,
    SegmentsEditComponent
  ],
  providers: [AppHttpService],
})
export class SegmentsModule { }
