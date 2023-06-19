import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Teacher } from "../models/teacher";

@Injectable({
  providedIn: "root",
})
export class TeacherService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return null;
  }

  getTeacherById(id: number): Observable<Teacher> {
    return null;
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return null;
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return null;
  }

  deleteTeacher(id: number): Observable<void> {
    return null;
  }

  searchTeachersByName(name: string): Observable<Teacher[]> {
    return null;
  }
}
