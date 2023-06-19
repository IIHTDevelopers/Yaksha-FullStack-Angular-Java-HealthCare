package com.collegemanagement.dto;

import java.util.Objects;

public class StudentDTO {

	private Long id;
	
	private String name;
	
	private Long departmentId;

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

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(departmentId, id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StudentDTO other = (StudentDTO) obj;
		return Objects.equals(departmentId, other.departmentId) && Objects.equals(id, other.id)
				&& Objects.equals(name, other.name);
	}

}
