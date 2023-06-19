package com.healthcare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.entity.Hospital;

@Repository
public interface HospitalDAO extends JpaRepository<Hospital, Long> {
	
}