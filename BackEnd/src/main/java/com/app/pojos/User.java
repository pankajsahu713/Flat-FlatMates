package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseEntity{
	@Column(length = 30,unique = true)
	private String userName;
	@Column(length = 30, unique = true)
	private String email;
	private String fullname;
	@Column(length = 300)//larger length required for encrypted passwords
	private String password;
	@Column(length = 10)
	private String contact;
	private boolean active;
	
	@OneToOne(cascade = { CascadeType.REMOVE, CascadeType.PERSIST })
    private User user;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
	private Set<Flat> flats = new HashSet<>();
	
	//uni dir many-to-many from User *----->* Role
	@ManyToMany
	@JoinTable(name = "user_roles", 
	joinColumns = @JoinColumn(name = "user_id"), 
	inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	
}
