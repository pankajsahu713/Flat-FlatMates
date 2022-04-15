package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Flat;

public class UserDetailsResponse {

	private Integer id;
	
	private String userName;
	
	private String fullname;
	
	private String email;
	
	private boolean active;
	
	private List<Flat> flats = new ArrayList<Flat>(); 

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "UserResponseDTO [id=" + id + ", userName=" + userName + ", email=" + email + ", active=" + active
				+ ", roles=" +  "]";
	}

	public List<Flat> getFlats() {
		return flats;
	}

	public void setFlats(List<Flat> flats) {
		this.flats = flats;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

}
