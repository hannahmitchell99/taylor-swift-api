package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.chrono.Era;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ErasController {

    @Autowired
    ErasRepository erasRepository;

    //CREATE

    //READ
//    @GetMapping("/eras")
//    public ArrayList<Era> getEras(){
//        return erasRepository.getAllEras();
//    }

//    @GetMapping("/era/{id}")
//    public Era getEraById(@PathVariable int id){
//        return erasRepository.getErasById(id);
//    }


    //UPDATE

    //DELETE
}
