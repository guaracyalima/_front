import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { PackageComponent }                 from "./package.component";
import { RouterModule, Routes }             from "@angular/router";
import { FormsModule }                      from "@angular/forms";
import { AppHttpService }                   from "../../../../settings/services/app-http.service";
import { AppSharedComponentsModule }        from "../../../../settings/app-shared-components/app-shared-components.module";


const appRoutes: Routes = [
    {
        path: 'packages',
        component: PackageComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      AppSharedComponentsModule
  ],
  declarations: [PackageComponent],
  providers: [AppHttpService],
})
export class PackageModule { }
