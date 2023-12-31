package com.healthcare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin
public class PatientController {
	
	@Autowired
	private PatientService patientService;
}
