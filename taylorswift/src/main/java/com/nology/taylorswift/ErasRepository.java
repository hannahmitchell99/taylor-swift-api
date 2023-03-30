package com.nology.taylorswift;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ErasRepository extends JpaRepository<Era, Long> {


    @Query(value = "SELECT * FROM era WHERE owns_masters_of_era = 1", nativeQuery = true)
    List<Era> ownsMastersOfEras();

    @Query(value = "SELECT * FROM era WHERE album_id IN (SELECT id FROM album WHERE rating > 7.5)", nativeQuery = true)
    List<Era> highlyRated();

    @Query(value = "SELECT  * FROM era WHERE album_id IN (SELECT id FROM album WHERE rating > 7.5) AND  owns_masters_of_era = 1", nativeQuery = true)
    List<Era> highlyRatedAndMasters();

}
