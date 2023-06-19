import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor";

@Injectable({
  providedIn: "root",
})
export class DoctorService {

  constructor() {}

  getAllDoctors(): any {
    return null;
  }

  getDoctorById(id: number): any {
    return null;
  }

  createDoctor(doctor: Doctor): any {
    return null;
  }

  updateDoctor(id: number, doctor: Doctor): any {
    return null;
  }

  deleteDoctor(id: number): any {
    return null;
  }

  searchDoctorsByName(name: string): any {
    return null;
  }

  searchDoctorsByHospitalIdAndName(hospitalId: number, name: string): any {
    return null;
  }
}
