package com.nology.taylorswift;

public class EraNotFoundException extends RuntimeException {

    public EraNotFoundException(){
        super("Era has not been found");
    }
}
