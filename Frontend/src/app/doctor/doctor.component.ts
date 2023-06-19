import { Component, OnInit } from "@angular/core";
import { Doctor } from "../models/doctor";
import { Hospital } from "../models/hospital";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.css"],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  selectedDoctor: Doctor = {
    id: 0,
    name: "",
    hospital: {
      id: 0,
      name: "",
    },
  };
  hospitals: Hospital[] = [];
  searchName = "";
  editing = false;

  constructor() {}

  ngOnInit(): void {
    // write your logic here
  }

  getAllDoctors(): void {
    // write your logic here
  }

  getHospitals(): void {
    // write your logic here
  }

  saveDoctor(): void {
    // write your logic here
  }

  createDoctor(): void {
    // write your logic here
  }

  updateDoctor(): void {
    // write your logic here
  }

  deleteDoctor(id: number): void {
    // write your logic here
  }

  editDoctor(doctor: Doctor): void {
    // write your logic here
  }

  cancelEdit(): void {
    // write your logic here
  }

  clearForm(): void {
    // write your logic here
  }

  searchDoctorsByName(): void {
    // write your logic here
  }
}
