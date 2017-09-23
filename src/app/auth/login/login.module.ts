import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppHttpService} from "../../settings/services/app-http.service";
import {LoginComponent} from "./login.component";


const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
	BrowserModule,
	FormsModule,
	RouterModule.forRoot(appRoutes),
  ],
  declarations: [
	  LoginComponent
  ],
	providers: [
		AppHttpService
	]
})
export class LoginModule { }
