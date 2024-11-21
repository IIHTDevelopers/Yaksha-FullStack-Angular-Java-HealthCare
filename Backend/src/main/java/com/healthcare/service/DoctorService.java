package com.healthcare.service;

import java.util.List;

import com.healthcare.dto.DoctorDTO;

public interface DoctorService {

	public List<DoctorDTO> getAllDoctors();

	public DoctorDTO getDoctorById(Long id);

	public DoctorDTO updateDoctor(Long id, DoctorDTO updatedDoctor);

	public List<DoctorDTO> getDoctorsByHospitalId(Long hospitalId);

	public DoctorDTO saveDoctor(DoctorDTO doctorDTO);

	public Boolean deleteDoctorById(Long id);

	public List<DoctorDTO> searchDoctorsByName(String name);

	public List<DoctorDTO> searchDoctorsByHospitalIdOrName(Long hospitalId, String name);
}