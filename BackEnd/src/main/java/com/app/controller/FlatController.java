package com.app.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.app.pojos.Flat;
import com.app.service.IFlatService;
import com.app.service.IUserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class FlatController {
	@Autowired
	private IFlatService service;
	
	@Autowired
	private IUserService userService;

//1. get all Flats of a user
//	GET /users/{userName}/flats
	@GetMapping("/{userName}/flats")
	public List<Flat> fetchAllFlats(@PathVariable String userName) {
		System.out.println("in fetch all flats " + userName);
		return service.getFlats(userName);
	}
	
	
	
	//delete flat of user
	@Modifying
	@DeleteMapping("/{userName}/flats/{flatId}")
	public ResponseEntity<?> deleteFlat(@PathVariable String userName, @PathVariable int flatId) {
		System.out.println("in del flat " + flatId);
		try {
			System.out.println("befire deleting");
			service.deleteFlat(flatId);
			System.out.println("after delete");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
	//add flat
	// POST /users/{userName}/flat
	@PostMapping("/{userName}/flats")
	public ResponseEntity<?> saveFlats(@PathVariable String userName, @RequestBody Flat flats) {
		System.out.println("in save flats  " + flats);
		Flat createdFlats = service.saveFlat(userName,flats);
		/*
		 * URI uri =
		 * ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand
		 * (createdFlats.getId()) .toUri();
		 */
		/* return ResponseEntity.created(uri).build(); */
		return ResponseEntity.status(HttpStatus.CREATED).body(createdFlats);
	}


	@GetMapping("/flat/search/{areaCode}")
	public List<Flat> searchFlats(@PathVariable int areaCode) {
		System.out.println("in search flat by areacode " + areaCode);
		return service.findByArea(areaCode);
	}
	
	
	@GetMapping("/flat/{id}")
	public List<Flat> searchFlatsById(@PathVariable int id) {
		System.out.println("in fetch flats by id " + id);
		return service.findByFlatId(id);
	}
	

//	 PUT /users/{userName}/flat/{flat_id}
	@PutMapping("/{userName}/flat/{id}")
	public ResponseEntity<?> updateflat(@PathVariable String userName, @PathVariable int id, @RequestBody Flat flat) {
		System.out.println("in update flat  " + flat);
		return new ResponseEntity<>(service.saveFlat(userName,flat), HttpStatus.OK);
	}

}
