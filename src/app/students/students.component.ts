import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    students: Student[] = [];

    constructor(private studentsService: StudentsService, private router: Router) { }

    // API Methods
    private getStudentsFromAPI(): void {
        this.studentsService.getAllStudents().subscribe(res => {
            if (res.status === 'success') this.students = res.data!;
        });
    }

    deleteStudent(id: string) {
        this.studentsService.deleteStudent(id).subscribe(() => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigateByUrl('/students');
        })
    }

    // Lifecycle hooks
    ngOnInit(): void {
        this.getStudentsFromAPI();
    }
}
