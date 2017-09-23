import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { Routes, RouterModule }       from "@angular/router";
import { FormsModule }                from "@angular/forms";
import { AppHttpService }             from "../../../../../settings/services/app-http.service";
import { ContactsComponent }          from "./contacts.component";
import { ContactsNewComponent }       from "../new/contacts-new.component";
import { ContactsViewComponent }      from "../view/contacts-view.component";
import { ContactsEditComponent }      from "../edit/contacts-edit.component";

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },

  {
    path: 'contacts/new',
    component: ContactsNewComponent
  },
  {
    path: 'contacts/:id',
    component: ContactsViewComponent
  },
  {
    path: 'contacts/:id/edit',
    component: ContactsEditComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ContactsComponent,
    ContactsNewComponent,
    ContactsViewComponent,
    ContactsEditComponent
  ],
  providers: [AppHttpService],
})
export class ContactsModule { }
