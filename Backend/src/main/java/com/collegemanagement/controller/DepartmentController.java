package com.collegemanagement.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.collegemanagement.dto.DepartmentDTO;
import com.collegemanagement.service.DepartmentService;

@RestController
@RequestMapping("/departments")
public class DepartmentController {
	private final DepartmentService departmentService;

	@Autowired
	public DepartmentController(DepartmentService departmentService) {
		this.departmentService = departmentService;
	}

	@GetMapping
	public ResponseEntity<List<DepartmentDTO>> getAllDepartments() {
		return null;
	}

	@GetMapping("/{id}")
	public ResponseEntity<DepartmentDTO> getDepartmentById(@PathVariable Long id) {
		return null;
	}

	@PostMapping
	public ResponseEntity<DepartmentDTO> createDepartment(@Valid @RequestBody DepartmentDTO departmentDTO) {
		return null;
	}

	@PutMapping("/{id}")
	public ResponseEntity<DepartmentDTO> updateDepartment(@PathVariable Long id,
			@Valid @RequestBody DepartmentDTO departmentDTO) {
		return null;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteDepartment(@PathVariable Long id) {
		return null;
	}

	@GetMapping("/search")
	public ResponseEntity<List<DepartmentDTO>> searchDepartmentsByName(@RequestParam("name") String name) {
		return null;
	}
}
