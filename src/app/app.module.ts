import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './_components/_public/home';
import { AdminComponent } from './_components/_admin/admin';
import { LoginComponent } from './_components/_public/login';
import { QuestionsComponent } from './_components/_admin/questions/questions.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageUploadComponent } from './_components/_shared/image-upload/image-upload.component';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EditorComponent } from './_components/_shared/editor/editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        CKEditorModule,
        MatToolbarModule,  
        MatIconModule,  
        MatButtonModule, 
        MatFormFieldModule, 
        MatCardModule,  
        MatProgressBarModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        QuestionsComponent,
        ImageUploadComponent ,
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