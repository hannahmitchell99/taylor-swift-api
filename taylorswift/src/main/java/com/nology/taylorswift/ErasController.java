package com.nology.taylorswift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class ErasController {

    @Autowired
    ErasService erasService;


    @PostMapping("/era")

    public ResponseEntity<Era> createItem(@RequestBody Era era) {
        erasService.addEra(era);
        return ResponseEntity.status(HttpStatus.CREATED).body(era);
    }

    @GetMapping("/eras")
    public List<Era> getEras(){
        return erasService.getAllEras();
    }

    @GetMapping("/eras/{id}")
    public Optional<Era> getEraById(@PathVariable int id) {
        return erasService.getErasById(id);
    }

    @GetMapping("/eras/masters")
    public List<Era> ownsMastersOfEras(){
        return erasService.ownsMastersOfEras();
    }

    @GetMapping("/eras/rating")
    public List<Era> highlyRated(){
        return erasService.highlyRated();
    }

    @GetMapping("/eras/rating/masters")
    public List<Era> highlyRatedAndMasters(){
        return erasService.highlyRatedAndMasters();
    }

    @GetMapping("/eras/masters/rating")
    public List<Era> mastersAndHighlyRatedAndMasters(){
        return erasService.highlyRatedAndMasters();
    }


//    @PostMapping("/era")
//    public void addEra(@RequestBody Era era){
//        erasService.addEra(era);
//    }
    //UPDATE

    //DELETE
}
