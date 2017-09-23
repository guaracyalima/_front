import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { Routes, RouterModule }     from "@angular/router";
import { FormsModule }              from "@angular/forms";
import { AddressesComponent }       from "./addresses.component";
import { AddressesNewComponent }    from "../new/addresses-new.component";
import { AddressesEditComponent }   from "../eidt/addresses-edit.component";
import { AddressesViewComponent }   from "../view/addresses-view.component";
import { AppHttpService }           from "../../../../settings/services/app-http.service";




const appRoutes: Routes = [

    {
        path: 'addresses',
        component: AddressesComponent
    },
    {
        path: 'addresses/new',
        component: AddressesNewComponent
    },
    {
        path: 'addresses/:id',
        component: AddressesEditComponent
    },

    {
        path: 'addresses/:id/edit',
        component: AddressesViewComponent
    },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        RouterModule.forRoot(appRoutes)
  ],
  providers: [AppHttpService],
  declarations: [
      AddressesComponent,
      AddressesNewComponent,
      AddressesEditComponent,
      AddressesViewComponent
  ]
})
export class AddressesModule { }
