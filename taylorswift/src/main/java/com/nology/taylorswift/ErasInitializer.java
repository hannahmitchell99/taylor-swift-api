package com.nology.taylorswift;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

@Component
public class ErasInitializer {

    private final ErasRepository erasRepository;

    @Value("classpath:eras.json")
    private Resource resourceFile;

    @Autowired
    public ErasInitializer(ErasRepository erasRepository){
        this.erasRepository = erasRepository;
    }
}
