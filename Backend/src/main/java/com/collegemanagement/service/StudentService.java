package com.collegemanagement.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collegemanagement.dto.StudentDTO;
import com.collegemanagement.repo.DepartmentRepository;
import com.collegemanagement.repo.StudentRepository;

@Service
public class StudentService {
	private final StudentRepository studentRepository;
	private final DepartmentRepository departmentRepository;

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	public StudentService(StudentRepository studentRepository, DepartmentRepository departmentRepository) {
		this.studentRepository = studentRepository;
		this.departmentRepository = departmentRepository;
	}

	public List<StudentDTO> getAllStudents() {
		return null;
	}

	public StudentDTO getStudentById(Long id) {
		return null;
	}

	public StudentDTO createStudent(StudentDTO studentDTO) {

		return null;
	}

	public StudentDTO updateStudent(Long id, StudentDTO studentDTO) {
		return null;
	}

	public Boolean deleteStudent(Long id) {
		return false;
	}

	public List<StudentDTO> searchStudentsByName(String name) {
		return null;
	}
}
