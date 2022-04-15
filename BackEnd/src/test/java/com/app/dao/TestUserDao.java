package com.app.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.service.IFlatService;

@SpringBootTest
class TestUserDao {
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private FlatRepository flatRepo;
	
	@Autowired
	private IFlatService service;

	@Test
	void testFindAllUsers() {
		userRepo.findAll().forEach(u -> System.out.println(u.getUserName() + " " + u.getRoles()));
	}
	
	                                                                                       
	@Test
	void testFindAllFlats() {
		flatRepo.findAll().forEach(f -> System.out.println(f.getId() + " " + f.getAreacode() + " " +f.getCity() + " "+ f.getContact() + f.getCost()));
	}
	
	@Test
	void testFindFlatByAreaCode() {
		flatRepo.findByAreacode(415002).forEach(
				t -> System.out.println(t.getAreacode() + " " + t.getCost() + " " + t.getDesc() + " "+ t.getOwnername() ));
	}

	@Test
	void testFindByUserUserName() {
		flatRepo.fetchByUserName("onkar").forEach(
				t -> System.out.println(t.getDesc() + " " + t.getUser().getUserName() + " " + t.getUser().getRoles()));
	}
	@Test
	void testFindByUserUserNameService() {
		service.getFlats("onkar").forEach(
				t -> System.out.println(t.getDesc() + " " + t.getUser().getUserName() + " " + t.getUser().getRoles()));
	}
	
	
	

}
