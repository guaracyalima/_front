import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from "@angular/forms";
import { Routes, RouterModule }   from "@angular/router";
import { CustomersComponent }     from "./customers.component";
import { CustomersNewComponent }  from "../new/customers-new.component";
import { CustomersViewComponent } from "../view/customers-view.component";
import { CustomersEditComponent } from "../edit/customers-edit.component";
import { AppHttpService }         from "../../../../settings/services/app-http.service";

const appRoutes: Routes = [

  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers/new',
    component: CustomersNewComponent
  },
  {
    path: 'customers/:id',
    component: CustomersViewComponent
  },
  {
    path: 'customers/:id/edit',
    component: CustomersEditComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CustomersComponent,
    CustomersNewComponent,
    CustomersViewComponent,
    CustomersEditComponent
  ],
  providers: [AppHttpService],
})
export class CustomersModule { }
