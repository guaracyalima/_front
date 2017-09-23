import { NgModule } 					from '@angular/core';
import { CommonModule } 				from '@angular/common';
import { RouterModule, Routes } 		from "@angular/router";
import { FormsModule } 					from "@angular/forms";
import { AppHttpService } 				from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule } 	from "../../../../settings/app-shared-components/app-shared-components.module";
import { PoliticComponent } 			from "./politic.component";
import { PoliticViewComponent } 		from "../view/politic-view.component";
import { PoliticNewComponent } 			from "../new/politic-new.component";
import { PoliticEditComponent } 		from "../edit/politic-edit.component";
import { PoliticPipe } 					from "./politic.pipe";


const appRoutes: Routes = [
	{
		path: 'politics',
		component: PoliticComponent
	},
	
	{
		path: 'politics/new',
		component: PoliticNewComponent
	},
{
		path: 'politics/:id',
		component: PoliticViewComponent
	},
	{
		path: 'politics/:id/edit',
		component: PoliticEditComponent
	},
];
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
        AppSharedComponentsModule
	],
	declarations: [
		PoliticComponent,
		PoliticViewComponent,
		PoliticNewComponent,
		PoliticEditComponent,
        PoliticPipe,


	],
	providers: [AppHttpService],
})
export class PoliticModule { }
