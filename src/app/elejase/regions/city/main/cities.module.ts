import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { Routes, RouterModule}        from "@angular/router";
import { CitiesComponent }            from "./cities.component";
import { AppSharedComponentsModule }  from "../../../../settings/app-shared-components/app-shared-components.module";
import { AppHttpService }             from "../../../../settings/services/app-http.service";
import { CitiesViewComponent }        from "../view/cities-view.component";


const appRoutes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'cities/:id',
    component: CitiesViewComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    AppSharedComponentsModule
  ],
  declarations: [
    CitiesComponent,
    CitiesViewComponent
  ],
  providers: [AppHttpService]
})
export class CitiesModule { }
