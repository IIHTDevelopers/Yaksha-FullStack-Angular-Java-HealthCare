import { Injectable } from "@angular/core";
import { Patient } from "../models/patient";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  constructor() {}

  getAllPatients(): any {
    return null;
  }

  getPatientById(id: number): any {
    return null;
  }

  createPatient(patient: Patient): any {
    return null;
  }

  updatePatient(id: number, patient: Patient): any {
    return null;
  }

  deletePatient(id: number): any {
    return null;
  }

  searchPatientsByName(name: string): any {
    return null;
  }

  searchPatientsByDoctorName(name: string): any {
    return null;
  }
}
