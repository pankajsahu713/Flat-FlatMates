package com.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.dao.FlatRepository;

@SpringBootTest
class ApplicationTests {
	@Autowired
	private PasswordEncoder enc;
	
	@Autowired
	private FlatRepository flatRepo;

	@Test
	void contextLoads() {
		System.out.println(enc.encode("ram#12345"));
	System.out.println(enc.encode("1234"));
	
	}
	@Test
	void testFindByUserUserName() {
		flatRepo.fetchByUserName("Riya").forEach(System.out::println);
	
	}

}
