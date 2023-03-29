package com.nology.taylorswift;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ErasRepository extends JpaRepository<Era, Long> {


    @Query(value = "SELECT * FROM eras WHERE ownsMastersOfEra = 'true'", nativeQuery = true)
    List<Era> ownsMastersOfEras();

    @Query(value = "SELECT  * FROM eras WHERE json_value(albumOfEra,'$.rating')>'7.5'", nativeQuery = true)
    List<Era> highlyRated();

    @Query(value = "SELECT  * FROM eras WHERE json_value(albumOfEra,'$.rating')>'7.5' AND  ownsMastersOfEra = 'true'", nativeQuery = true)
    List<Era> highlyRatedAndMasters();

}
