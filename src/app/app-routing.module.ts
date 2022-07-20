import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    { path: '', redirectTo: '/students', pathMatch: 'full' },
    {
        path: 'students',
        children: [
            { path: 'add', component: AddStudentComponent },
            { path: 'edit/:id', component: EditStudentComponent },
            { path: '', component: StudentsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
