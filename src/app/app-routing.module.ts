import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_components/_public/home';
import { AdminComponent } from './_components/_admin/admin';
import { LoginComponent } from './_components/_public/login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { QuestionsComponent } from './_components/_admin/questions/questions.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
