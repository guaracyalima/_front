import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { Routes, RouterModule }    from "@angular/router";
import { DashboardComponent }      from "./dashboard.component";

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
