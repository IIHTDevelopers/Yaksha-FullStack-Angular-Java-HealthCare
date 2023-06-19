import { Component, OnInit } from "@angular/core";
import { Hospital } from "../models/hospital";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.css"],
})
export class HospitalComponent implements OnInit {
  hospitals!: Hospital[];
  newHospital: Hospital = new Hospital();
  selectedHospital: Hospital = new Hospital();
  searchName!: string;
  isEditMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // write your logic here
  }

  createOrUpdateHospital(): void {
    // write your logic here
  }

  getAllHospitals(): void {
    // write your logic here
  }

  createHospital(): void {
    // write your logic here
  }

  updateHospital(): void {
    // write your logic here
  }

  deleteHospital(id: number): void {
    // write your logic here
  }

  searchHospitalsByName(): void {
    // write your logic here
  }

  getHospitalById(id: number): void {
    // write your logic here
  }

  editHospital(hospital: Hospital): void {
    // write your logic here
  }

  cancelEdit(): void {
    // write your logic here
  }

  resetForm(): void {
    // write your logic here
  }

  onKeyPress(event: any) {
    // write your logic here
  }
}
