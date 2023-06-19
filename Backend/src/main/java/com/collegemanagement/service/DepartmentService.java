package com.collegemanagement.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collegemanagement.dto.DepartmentDTO;
import com.collegemanagement.repo.DepartmentRepository;

@Service
public class DepartmentService {
	private final DepartmentRepository departmentRepository;

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	public DepartmentService(DepartmentRepository departmentRepository) {
		this.departmentRepository = departmentRepository;
	}

	public List<DepartmentDTO> getAllDepartments() {
		return null;
	}

	public DepartmentDTO getDepartmentById(Long id) {
		return null;

	}

	public DepartmentDTO createDepartment(DepartmentDTO departmentDTO) {
		return null;
	}

	public DepartmentDTO updateDepartment(Long id, DepartmentDTO departmentDTO) {
		return null;
	}

	public Boolean deleteDepartment(Long id) {
		return false;
	}

	public List<DepartmentDTO> searchDepartmentsByName(String name) {
		return null;
	}
}
