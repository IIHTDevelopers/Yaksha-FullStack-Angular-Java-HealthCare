import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Student } from "./models/student";
import { Department } from "../department/models/department";
import { StudentService } from "./services/student.service";
import { DepartmentService } from "../department/services/department.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  departments: Department[] = [];
  selectedStudent: Student | undefined;
  studentForm: FormGroup;
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {}

  getStudents(): void {}

  getDepartments(): void {}

  createStudent(): void {}

  updateStudent(): void {}

  getStudentById(id: number): void {}

  deleteStudent(student: Student): void {}

  searchStudents(): void {}

  clearForm(): void {}
}
