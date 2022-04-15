package com.app.service;

import java.util.List;

import com.app.pojos.Flat;

public interface IFlatService {

	List<Flat> getFlats(String userName);

	Flat saveFlat(String userName, Flat t);

//	void deleteFlat(long id);

	List<Flat> findByArea(int areaCode);
	
	List<Flat> findByFlatId(int id);

	void deleteFlat(int id);


}