import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Department } from "../models/department";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return null;
  }

  getDepartmentById(id: number): Observable<Department> {
    return null;
  }

  createDepartment(department: Department): Observable<Department> {
    return null;
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return null;
  }

  deleteDepartment(id: number): Observable<void> {
    return null;
  }

  searchDepartmentsByName(name: string): Observable<Department[]> {
    return null;
  }
}
