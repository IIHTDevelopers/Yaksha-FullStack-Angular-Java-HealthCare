import { Injectable } from "@angular/core";
import { Hospital } from "../models/hospital";

@Injectable({
  providedIn: "root",
})
export class HospitalService {
  constructor() {}

  getAllHospitals(): any {
    return null;
  }

  getHospitalById(id: number): any {
    return null;
  }

  createHospital(hospital: Hospital): any {
    return null;
  }

  updateHospital(id: number, hospital: Hospital): any {
    return null;
  }

  deleteHospital(id: number): any {
    return null;
  }

  searchHospitalsByName(name: string): any {
    return null;
  }
}
