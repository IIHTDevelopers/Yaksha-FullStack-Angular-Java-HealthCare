package com.healthcare.dto;

import java.util.Objects;

public class DoctorDTO {
	private Long id;
	private String name;
	private Long hospitalId;

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

	public Long getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(Long hospitalId) {
		this.hospitalId = hospitalId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(hospitalId, id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DoctorDTO other = (DoctorDTO) obj;
		return Objects.equals(hospitalId, other.hospitalId) && Objects.equals(id, other.id)
				&& Objects.equals(name, other.name);
	}
	
	

}