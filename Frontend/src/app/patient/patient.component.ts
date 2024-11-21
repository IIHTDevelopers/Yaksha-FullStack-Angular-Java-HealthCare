import { Component, OnInit } from "@angular/core";
import { Patient } from "../models/patient";
import { Doctor } from "../models/doctor";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.css"],
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  selectedPatient: Patient = new Patient();
  editing = false;
  searchName: string = "";

  constructor() {}

  ngOnInit(): void {
    // write your logic here
  }

  getAllPatients(): void {
    // write your logic here
  }

  getAllDoctors(): void {
    // write your logic here
  }

  createPatient(): void {
    // write your logic here
  }

  updatePatient(): void {
    // write your logic here
  }

  deletePatient(id: number): void {
    // write your logic here
  }

  editPatient(patient: Patient): void {
    // write your logic here
  }

  clearSelectedPatient(): void {
    // write your logic here
  }

  searchPatientsByName(): void {
    // write your logic here
  }

  cancelEdit(): void {
    // write your logic here
  }
}
