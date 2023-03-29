package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ErasService {

    @Autowired
    ErasRepository erasRepository;

    public void addEra(Era era) {
        erasRepository.save(era);
    }
    public Optional<Era> getErasById(long id) {
        if(!erasRepository.existsById(id)){
            throw new EraNotFoundException();
        }
        return erasRepository.findById(id);
    }

    public List<Era> ownsMastersOfEras() {
        if(erasRepository.ownsMastersOfEras() == null){
            throw new EraNotFoundException();
        }
        return erasRepository.ownsMastersOfEras();
    }

    public List<Era> highlyRated() {
        if(erasRepository.highlyRated() == null){
            throw new EraNotFoundException();
        }
        return erasRepository.highlyRated();
    }

    public List<Era> highlyRatedAndMasters() {
        if(erasRepository.highlyRatedAndMasters() == null){
            throw new EraNotFoundException();
        }
        return erasRepository.highlyRatedAndMasters();
    }


    public List<Era> getAllEras() {
        return erasRepository.findAll();
    }

}
