package com.healthcare.service;

import java.util.List;

import com.healthcare.dto.PatientDTO;

public interface PatientService {

	public List<PatientDTO> getAllPatients();

	public PatientDTO getPatientById(Long id);

	public List<PatientDTO> getPatientsByDoctorId(Long doctorId);

	public PatientDTO updatePatient(Long id, PatientDTO updatedPatient);

	public PatientDTO savePatient(PatientDTO patientDTO);

	public Boolean deletePatientById(Long id);

	public List<PatientDTO> searchPatientsByName(String name);

	public List<PatientDTO> searchPatientsByDoctorId(Long doctorId);
}