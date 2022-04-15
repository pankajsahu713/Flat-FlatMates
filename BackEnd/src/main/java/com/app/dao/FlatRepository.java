package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Flat;

public interface FlatRepository extends JpaRepository<Flat, Long> {
	List<Flat> findByAreacode(int areacode);

	@Query(value = "select f from Flat f where f.user.userName=:p1")
	List<Flat> fetchByUserName(@Param("p1") String userName );
	
	@Modifying
	@Query(value = "delete from Flat f where f.id=:p2")
	void deleteFlatById(@Param("p2") int id);
	
	@Query(value = "select f from Flat f where f.id=:p3")
	List<Flat> findWithId(@Param("p3") int id);
	
}
