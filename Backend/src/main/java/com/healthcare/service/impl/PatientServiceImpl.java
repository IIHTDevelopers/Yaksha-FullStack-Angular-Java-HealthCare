package com.healthcare.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.dto.PatientDTO;
import com.healthcare.repo.PatientDAO;
import com.healthcare.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private PatientDAO patientDAO;
	
	@Autowired
	private DoctorServiceImpl doctorService;

	@Autowired
	ModelMapper modelMapper;

	@Override
	public List<PatientDTO> getAllPatients() {
		return null;
	}

	@Override
	public PatientDTO getPatientById(Long id) {
		return null;
	}

	@Override
	public List<PatientDTO> getPatientsByDoctorId(Long doctorId) {
		return null;
	}

	@Override
	public PatientDTO updatePatient(Long id, PatientDTO updatedPatient) {
		return null;
	}

	@Override
	public PatientDTO savePatient(PatientDTO patientDTO) {
		return null;
	}

	@Override
	public Boolean deletePatientById(Long id) {
		return null;
	}

	@Override
	public List<PatientDTO> searchPatientsByName(String name) {
		return null;
	}

	@Override
	public List<PatientDTO> searchPatientsByDoctorId(Long doctorId) {
		return null;
	}
}