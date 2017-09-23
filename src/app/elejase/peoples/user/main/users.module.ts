import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from "@angular/router";
import { UsersComponent }               from "./users.component";
import { BrowserModule }                from "@angular/platform-browser";
import { FormsModule }                  from "@angular/forms";
import { HttpModule }                   from "@angular/http";
import { UsersEditComponent }           from "../edit/users-edit.component";
import { UsersViewComponent }           from "../view/users-view.component";
import { AppSharedComponentsModule }    from "../../../../settings/app-shared-components/app-shared-components.module";
import { MaskDirective }                from "../../../directives/mask.directive";
import { UserPipePipe }                 from "./user-pipe.pipe";
import { UsersNewComponent }            from "../new/users-new.component";



const appRoutes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/new',
        component: UsersNewComponent
    },
    {
        path: 'users/:id',
        component: UsersViewComponent
    },

    {
        path: 'users/:id/edit',
        component: UsersEditComponent
    }
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule,
        AppSharedComponentsModule

    ],
    declarations: [
        UsersComponent,
        UsersNewComponent,
        UsersViewComponent,
        UsersEditComponent,
        UserPipePipe,
        MaskDirective
    ]
})
export class UsersModule {
}
