import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Student } from './student';

interface APIResponse<T = undefined> {
    status: string;
    data?: T;
    message?: string;
}

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private API_URL = 'http://localhost:3000/api/students';

    private handleHTTPError(error: any): Observable<APIResponse> {
        console.log(error);
        return of({ status: 'fail', message: error.message });
    }

    constructor(private http: HttpClient) { }

    getAllStudents(): Observable<APIResponse<Student[] | undefined>> {
        return this.http.get<APIResponse<Student[]>>(this.API_URL).pipe(catchError(this.handleHTTPError));
    }

    getStudentByID(id: string): Observable<APIResponse<Student | undefined>> {
        return this.http.get<APIResponse<Student>>(this.API_URL + '/' + id).pipe(catchError(this.handleHTTPError));
    }

    createStudent(data: Student<undefined>): Observable<APIResponse<Student | undefined>> {
        return this.http.post<APIResponse<Student>>(this.API_URL, data).pipe(catchError(this.handleHTTPError));
    }

    updateStudent(id: string, data: Student): Observable<APIResponse<Student | undefined>> {
        return this.http.put<APIResponse<Student>>(this.API_URL + '/' + id, data).pipe(catchError(this.handleHTTPError));
    }

    deleteStudent(id: string): Observable<APIResponse<null | undefined>> {
        return this.http.delete<APIResponse<null>>(this.API_URL + '/' + id).pipe(catchError(this.handleHTTPError));
    }
}
