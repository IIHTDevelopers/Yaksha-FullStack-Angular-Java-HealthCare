package com.healthcare.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.dto.DoctorDTO;
import com.healthcare.repo.DoctorDAO;
import com.healthcare.repo.HospitalDAO;
import com.healthcare.service.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorDAO doctorDAO;

	@Autowired
	private HospitalDAO hospitalDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<DoctorDTO> getAllDoctors() {
		return null;
	}

	@Override
	public DoctorDTO getDoctorById(Long id) {
		return null;
	}

	@Override
	public DoctorDTO updateDoctor(Long id, DoctorDTO updatedDoctor) {
		return null;
	}

	@Override
	public List<DoctorDTO> getDoctorsByHospitalId(Long hospitalId) {
		return null;
	}

	@Override
	public DoctorDTO saveDoctor(DoctorDTO doctorDTO) {
		return null;
	}

	@Override
	public Boolean deleteDoctorById(Long id) {
		return null;
	}

	@Override
	public List<DoctorDTO> searchDoctorsByName(String name) {
		return null;
	}

	@Override
	public List<DoctorDTO> searchDoctorsByHospitalIdOrName(Long hospitalId, String name) {
		return null;
	}
}