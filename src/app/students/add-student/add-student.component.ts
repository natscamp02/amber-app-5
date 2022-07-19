import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
    selector: 'students-add',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    @Output('close') onClose = new EventEmitter();

    student: Student<undefined> = {
        _id: undefined,
        name: 'Nathaniel',
        email: 'nathan@email.com',
        cohort: '3',
        phoneNumber: 1234567
    }

    constructor(private studentsService: StudentsService) { }

    addNewStudent(form: NgForm): void {
        this.studentsService.createStudent(this.student).subscribe(() => {
            form.resetForm();
            this.close();
        })
    }

    close(): void {
        this.onClose.emit();
    }

    ngOnInit(): void {
    }

}
