package com.healthcare.dto;

import java.util.Objects;

public class PatientDTO {
	private Long id;
	private String name;
	private Long doctorId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(doctorId, id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PatientDTO other = (PatientDTO) obj;
		return Objects.equals(doctorId, other.doctorId) && Objects.equals(id, other.id)
				&& Objects.equals(name, other.name);
	}

}