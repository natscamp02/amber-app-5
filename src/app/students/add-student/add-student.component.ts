import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
    selector: 'students-add',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    student: Student = {
        name: '',
        email: '',
        cohort: '',
        phoneNumber: undefined
    }

    constructor(private studentsService: StudentsService, private location: Location) { }

    ngOnInit(): void {
    }

    addNewStudent(): void {
        this.studentsService.createStudent(this.student).subscribe(() => {
            this.location.back();
        })
    }

}
