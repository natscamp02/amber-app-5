import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
    selector: 'app-edit-student',
    templateUrl: './edit-student.component.html',
    styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
    student?: Student;
    id: string = '';

    constructor(private studentsService: StudentsService, private location: Location, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getCurrentStudent();
    }

    private getCurrentStudent(): void {
        this.id = this.route.snapshot.params['id'];

        this.studentsService.getStudentByID(this.id).subscribe(res => {
            if (res.status === 'success') this.student = res.data!;
        })
    }

    updateStudent(): void {
        this.studentsService.updateStudent(this.id, this.student!).subscribe(() => {
            this.location.back();
        });
    }


}
