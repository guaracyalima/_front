import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { Routes, RouterModule }     from "@angular/router";
import { FormsModule }              from "@angular/forms";
import { AppHttpService }           from "../../../../settings/services/app-http.service";
import { ProfileComponent }         from "./profile.component";
import { ProfileNewComponent }      from "../new/profile-new.component";
import { ProfileViewComponent }     from "../view/profile-view.component";
import { ProfileEditComponent }     from "../edit/profile-edit.component";


const appRoutes: Routes = [
  {
    path: 'profiles',
    component: ProfileComponent
  },

  {
    path: 'profiles/new',
    component: ProfileNewComponent
  },
  {
    path: 'profiles/:id',
    component: ProfileViewComponent
  },
  {
    path: 'profiles/:id/edit',
    component: ProfileEditComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ProfileComponent,
    ProfileNewComponent,
    ProfileViewComponent,
    ProfileEditComponent
  ],
  providers: [AppHttpService],
})
export class ProfileModule { }
