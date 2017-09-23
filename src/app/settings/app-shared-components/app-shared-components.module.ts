import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginatorComponent } from "../app-paginator/app-paginator.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      AppPaginatorComponent,
  ],
  exports: [
      AppPaginatorComponent,
  ]
})
export class AppSharedComponentsModule { }
