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

    showAddForm: boolean = false;

    toggleAddModal() {
        this.showAddForm = !this.showAddForm;
    }

    constructor(private studentsService: StudentsService) { }

    private getStudentsFromAPI(): void {
        this.studentsService.getAllStudents().subscribe(res => {
            if (res.status === 'success') this.students = res.data!;
        });
    }

    // editStudentInfo(id: string) { }

    deleteStudentInfo(id: string): void {
        this.studentsService.deleteStudent(id).subscribe(() => {
            this.students = this.students.filter(s => s._id !== id);
        });
    }

    ngOnInit(): void {
        this.getStudentsFromAPI();
    }
}
