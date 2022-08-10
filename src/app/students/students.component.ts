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

    constructor(private studentsService: StudentsService) { }

    // Lifecycle hooks
    ngOnInit(): void {
        this.getStudentsFromAPI();
    }

    // API Methods
    private getStudentsFromAPI(): void {
        this.studentsService.getAllStudents().subscribe(res => {
            if (res.status === 'success') this.students = res.data!;
        });
    }

    deleteStudent(id: string): void {
        let confirmation = window.confirm('Are you sure you want to delete this student?');
        if (!confirmation) return;

        this.studentsService.deleteStudent(id).subscribe(() => this.ngOnInit());
    }
}
