import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from "@angular/forms";
import { Routes, RouterModule }     from "@angular/router";
import { AppHttpService }           from "../../../../../settings/services/app-http.service";
import { CompaniesComponent }       from "./companies.component";
import { CompaniesNewComponent }    from "../new/companies-new.component";
import { CompaniesViewComponent }   from "../view/companies-view.component";
import { CompaniesEditComponent }   from "../edit/companies-edit.component";



const appRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent
  },

  {
    path: 'companies/new',
    component: CompaniesNewComponent
  },
  {
    path: 'companies/:id',
    component: CompaniesViewComponent
  },
  {
    path: 'companies/:id/edit',
    component: CompaniesEditComponent
  },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CompaniesComponent,
    CompaniesNewComponent,
    CompaniesViewComponent,
    CompaniesEditComponent
  ],
  providers: [AppHttpService],
})
export class CompaniesModule { }
