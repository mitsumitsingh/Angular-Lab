import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './_components/_public/home';
import { AdminComponent } from './_components/_admin/admin';
import { LoginComponent } from './_components/_public/login';;
import { QuestionsComponent } from './_components/_admin/questions/questions.component';
import { NgxEditorModule } from 'ngx-editor';;
import { CommonModule } from '@angular/common';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './_components/_editor/editor/editor.component';
import { CustomMenuComponent } from './_components/_editor/custom-menu/custom-menu.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxEditorModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        QuestionsComponent,
        CustomMenuComponent,
        EditorComponent  
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }