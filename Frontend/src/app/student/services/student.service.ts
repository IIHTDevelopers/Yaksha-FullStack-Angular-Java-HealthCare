import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return null;
  }

  getStudentById(id: number): Observable<Student> {
    return null;
  }

  createStudent(student: Student): Observable<Student> {
    return null;
  }

  updateStudent(student: Student): Observable<Student> {
    return null;
  }

  deleteStudent(id: number): Observable<void> {
    return null;
  }

  searchStudents(name: string): Observable<Student[]> {
    return null;
  }
}
