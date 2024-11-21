package com.healthcare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.entity.Doctor;

@Repository
public interface DoctorDAO extends JpaRepository<Doctor, Long> {
}