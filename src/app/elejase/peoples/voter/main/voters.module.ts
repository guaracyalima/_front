import { NgModule } 					from '@angular/core';
import { BrowserModule } 				from '@angular/platform-browser';
import { RouterModule, Routes } 		from "@angular/router";
import { FormsModule } 					from "@angular/forms";
import { AppSharedComponentsModule } 	from "../../../../settings/app-shared-components/app-shared-components.module";
import { VotersPipe } 					from "./voters.pipe";
import { VotersComponent } 				from "./voters.component";
import { VotersEditComponent } 			from "../edit/voters-edit.component";
import { VotersNewComponent } 			from "../new/voters-new.component";
import { VotersViewComponent } 			from "../view/voters-view.component";

const appRoutes: Routes = [
	{
		path: 'voters',
		component: VotersComponent
	},
	
	{
		path: 'voters/new',
		component: VotersNewComponent
	},

	{
		path: 'voters/:id/edit',
		component: VotersEditComponent
	},
	{
		path: 'voters/:id',
		component: VotersViewComponent
	}


];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
        AppSharedComponentsModule

	],

	declarations: [
		VotersComponent,
		VotersEditComponent,
	    VotersNewComponent,
	    VotersViewComponent,
		VotersPipe
	]
})

export class VotersModule { }
