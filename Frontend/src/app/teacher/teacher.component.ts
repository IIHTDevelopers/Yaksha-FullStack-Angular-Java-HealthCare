import { Component, OnInit } from "@angular/core";
import { Teacher } from "./models/teacher";
import { Department } from "../department/models/department";
import { TeacherService } from "./services/teacher.service";
import { DepartmentService } from "../department/services/department.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"],
})
export class TeacherComponent implements OnInit {
  departments: Department[];
  teachers: Teacher[];
  searchName: string;
  newTeacher: {};
  teacherForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  initializeForm(): void {}

  getDepartments(): void {}

  getTeachers(): void {}

  createTeacher(): void {}

  editTeacher(teacher: Teacher): void {}

  updateTeacher(): void {}

  deleteTeacher(id: number): void {}

  searchTeacher(): void {}
}
