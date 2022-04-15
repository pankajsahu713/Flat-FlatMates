package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Flat;
import com.app.pojos.User;
@Transactional
@Service
public class FlatService implements IFlatService {
	@Autowired
	private FlatRepository flatRepo;
	@Autowired
	private UserRepository userRepo;

	@Override
	public List<Flat> getFlats(String userName) {
		return flatRepo.fetchByUserName(userName);
	}
  
	
	@Override
	public void deleteFlat(int id) {
	
		try {
		 flatRepo.deleteFlatById(id);
//		Optional<Flat> foundflat = flatRepo.findById(id);
//		System.out.println(foundflat.get());
	   //flatRepo.delete(foundflat);

	}catch (Exception e) {
		e.printStackTrace();
	}
		
	}

	@Override
	public List<Flat> findByArea(int areacode) {
		return flatRepo.findByAreacode(areacode);
	}

	@Override
	public Flat saveFlat(String userName, Flat t) {
		User user = userRepo.fetchUserDetails(userName).orElseThrow(() -> new RuntimeException("User Name Not Found"));
		t.setUser(user);
		t.setContact(user.getContact());
		t.setOwnername(user.getUserName());
		return flatRepo.save(t);
	}


	@Override
	public List<Flat> findByFlatId(int id) {
		
		return flatRepo.findWithId(id);
	}
	

}
