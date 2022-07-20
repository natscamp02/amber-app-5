import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentsComponent,
        AddStudentComponent,
        EditStudentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
