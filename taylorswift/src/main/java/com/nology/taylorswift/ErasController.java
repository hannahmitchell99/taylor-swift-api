package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ErasController {

    @Autowired
    ErasService erasService;

    //CREATE

    //READ
    @GetMapping("/eras")
    public List<Era> getEras(){
        return erasService.getAllEras();
    }

    @GetMapping("/era/{id}")
    public Era getEraById(@PathVariable int id) {
        return erasService.getErasById(id);
    }

    @GetMapping("/eras/masters")
    public ArrayList<Era> ownsMastersOfEras(){
        return erasService.ownsMastersOfEras();
    }

    @GetMapping("/eras/rating")
    public ArrayList<Era> highlyRated(){
        return erasService.highlyRated();
    }

    @GetMapping("/eras/rating/masters")
    public ArrayList<Era> highlyRatedAndMasters(){
        return erasService.highlyRatedAndMasters();
    }

    @GetMapping("/eras/masters/rating")
    public ArrayList<Era> mastersAndHighlyRatedAndMasters(){
        return erasService.highlyRatedAndMasters();
    }


    //UPDATE

    //DELETE
}
