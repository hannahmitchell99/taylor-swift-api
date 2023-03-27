package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ErasService {

    @Autowired
    ErasRepository erasRepository;

    public Era getEraById(long id) {
        if(!erasRepository.hasEra(id)){
            throw new EraNotFoundException();
        }
        return erasRepository.getErasById(id);
    }


}
