package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ErasService {

    @Autowired
    ErasRepository erasRepository;

    public void addEra(Era era) {
        erasRepository.addEra(era);
    }
    public Era getErasById(long id) {
        if(!erasRepository.hasEra(id)){
            throw new EraNotFoundException();
        }
        return erasRepository.getErasById(id);
    }

    public List<Era> getAllEras() {
        return erasRepository.getAllEras();
    }

}
