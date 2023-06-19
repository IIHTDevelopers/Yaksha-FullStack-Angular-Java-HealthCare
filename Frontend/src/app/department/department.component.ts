import { Component, OnInit } from "@angular/core";
import { Department } from "./models/department";
import { Student } from "../student/models/student";
import { Teacher } from "../teacher/models/teacher";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department | null;
  students: Student[];
  teachers: Teacher[];
  searchName: string;
  newDepartment: {};
  editForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  loadDepartments(): void {}

  getDepartments(): void {}

  viewDepartment(): void {}

  listStudents(): void {}

  saveDepartment(): void {}

  listTeachers(): void {}

  editDepartment(department: Department): void {}

  deleteDepartment(id: number): void {}

  searchDepartment(): void {}

  clearForm(): void {}

  clearSearch(): void {}

  getDepartmentById(departmentId: number): void {}
}
