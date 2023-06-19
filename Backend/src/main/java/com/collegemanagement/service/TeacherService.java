package com.collegemanagement.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collegemanagement.dto.TeacherDTO;
import com.collegemanagement.repo.DepartmentRepository;
import com.collegemanagement.repo.TeacherRepository;

@Service
public class TeacherService {
	private final TeacherRepository teacherRepository;
	private final DepartmentRepository departmentRepository;

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	public TeacherService(TeacherRepository teacherRepository, DepartmentRepository departmentRepository) {
		this.teacherRepository = teacherRepository;
		this.departmentRepository = departmentRepository;
	}

	public List<TeacherDTO> getAllTeachers() {
		return null;
	}

	public TeacherDTO getTeacherById(Long id) {
		return null;
	}

	public TeacherDTO createTeacher(TeacherDTO teacherDTO) {
		return null;
	}

	public TeacherDTO updateTeacher(Long id, TeacherDTO teacherDTO) {
		return null;
	}

	public Boolean deleteTeacher(Long id) {
		return false;
	}

	public List<TeacherDTO> searchTeachersByName(String name) {
		return null;
	}
}
