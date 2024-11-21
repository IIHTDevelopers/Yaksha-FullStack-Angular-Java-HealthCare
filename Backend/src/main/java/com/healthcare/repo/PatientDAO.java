package com.healthcare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.entity.Patient;

@Repository
public interface PatientDAO extends JpaRepository<Patient, Long> {

}