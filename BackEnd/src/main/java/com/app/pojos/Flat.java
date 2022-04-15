package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString(exclude = {"user"})
@Entity
@Table(name = "flat")
public class Flat extends BaseEntity{
	@Column(name="description",length = 60)
	private String desc;
	private LocalDate targetDate;
	@Enumerated(EnumType.STRING)
	@Column
	private OptionType type;
	
	@Enumerated(EnumType.STRING)
	@Column
	private Furnishing furnishtype;
	@Column(length = 10)
	private String contact;
	private String ownername;
	private double cost;
	private String locality;
	@NotBlank
	@Column
	private String city;
	private String state;
//	@NotBlank
//	@Size(max = 999999 , min = 100000) //
	@Column
	private int areacode;
	@Enumerated(EnumType.STRING)
	@Column
	private preferenceType pType; 
	
	//uni dir many to one association between User 1<----- * ToDo
	@ManyToOne
	@JsonIgnore
	private User user;

}
