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

import com.collegemanagement.dto.TeacherDTO;
import com.collegemanagement.service.TeacherService;

@RestController
@RequestMapping("/teachers")
public class TeacherController {
	private final TeacherService teacherService;

	@Autowired
	public TeacherController(TeacherService teacherService) {
		this.teacherService = teacherService;
	}

	@GetMapping
	public ResponseEntity<List<TeacherDTO>> getAllTeachers() {
		return null;
	}

	@GetMapping("/{id}")
	public ResponseEntity<TeacherDTO> getTeacherById(@PathVariable Long id) {
		return null;
	}

	@PostMapping
	public ResponseEntity<TeacherDTO> createTeacher(@Valid @RequestBody TeacherDTO teacherDTO) {
		return null;
	}

	@PutMapping("/{id}")
	public ResponseEntity<TeacherDTO> updateTeacher(@PathVariable Long id, @Valid @RequestBody TeacherDTO teacherDTO) {
		return null;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteTeacher(@PathVariable Long id) {
		return null;
	}

	@GetMapping("/search")
	public ResponseEntity<List<TeacherDTO>> searchTeachersByName(@RequestParam("name") String name) {
		return null;
	}
}
