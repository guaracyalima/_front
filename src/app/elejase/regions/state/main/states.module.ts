import { NgModule } 					from '@angular/core';
import { CommonModule } 				from '@angular/common';
import { RouterModule, Routes} 			from "@angular/router";
import { FormsModule } 					from '@angular/forms';
import { AppHttpService } 				from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule } 	from "../../../../settings/app-shared-components/app-shared-components.module";
import { StatesComponent } 				from "./states.component";
import { StatesViewComponent } 			from "../view/states-view.component";



const appRoutes: Routes = [
	{
		path: 'states',
		component: StatesComponent
	},
	{
		path: 'states/:id',
		component: StatesViewComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	RouterModule.forRoot(appRoutes),
    AppSharedComponentsModule
  ],
  declarations: [
  	StatesComponent,
  	StatesViewComponent
  	],
	providers: [AppHttpService]
})
export class StatesModule { }
