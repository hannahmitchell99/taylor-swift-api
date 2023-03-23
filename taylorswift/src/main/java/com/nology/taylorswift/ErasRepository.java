package com.nology.taylorswift;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class ErasRepository {

    private ArrayList<Era> eras = new ArrayList<>();

    public String addEra(Era era){
        eras.add(era);
        return "You added an era";
    }

    public ArrayList<Era> getAllEras() {
        return eras;
    }

    public Era getErasById(long id){
        for(Era era: eras){
            if(era.getEraId() == id){
                return era;
            }
        }
        return null;
    }


}
