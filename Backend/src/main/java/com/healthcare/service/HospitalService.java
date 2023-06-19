package com.healthcare.service;

import java.util.List;

import com.healthcare.dto.HospitalDTO;

public interface HospitalService {

	public List<HospitalDTO> getAllHospitals();

	public HospitalDTO getHospitalById(Long id);

	public HospitalDTO updateHospital(Long id, HospitalDTO updatedHospital);

	public HospitalDTO saveHospital(HospitalDTO hospitalDTO);

	public Boolean deleteHospitalById(Long id);

	public List<HospitalDTO> searchHospitalsByName(String name);
}