package com.healthcare.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.dto.HospitalDTO;
import com.healthcare.repo.HospitalDAO;
import com.healthcare.service.HospitalService;

@Service
public class HospitalServiceImpl implements HospitalService {
	
	@Autowired
	private HospitalDAO hospitalDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<HospitalDTO> getAllHospitals() {
		return null;
	}

	@Override
	public HospitalDTO getHospitalById(Long id) {
		return null;
	}

	@Override
	public HospitalDTO updateHospital(Long id, HospitalDTO updatedHospital) {
		return null;
	}

	@Override
	public HospitalDTO saveHospital(HospitalDTO hospitalDTO) {
		return null;
	}

	@Override
	public Boolean deleteHospitalById(Long id) {
		return null;
	}

	@Override
	public List<HospitalDTO> searchHospitalsByName(String name) {
		return null;
	}
}