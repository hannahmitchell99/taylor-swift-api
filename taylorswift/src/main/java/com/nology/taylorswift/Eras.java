package com.nology.taylorswift;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;

public class Eras {

    private String eraName;
    private int eraId;
    private HashMap<String, String> albumOfEra;

    // name, genre, rating, cover, peakChartPosition, numOfSongs, dateReleased
    private String eraDescription;
    private ArrayList<String> eraColorScheme;
    private HashMap<String, ArrayList> eraStyle;

    //image, description, keyPieces
    private String eraIconicQuote;
    private boolean ownsMastersOfEra;
    private ArrayList<String> eraInspiration;

    public Eras() {
    }

    public Eras(String eraName, int eraId, HashMap<String, String> albumOfEra, String eraDescription, ArrayList<String> eraColorScheme, HashMap<String, ArrayList> eraStyle, String eraIconicQuote, boolean ownsMastersOfEra, ArrayList<String> eraInspiration) {
        this.eraName = eraName;
        this.eraId = eraId;
        this.albumOfEra = albumOfEra;
        this.eraDescription = eraDescription;
        this.eraColorScheme = eraColorScheme;
        this.eraStyle = eraStyle;
        this.eraIconicQuote = eraIconicQuote;
        this.ownsMastersOfEra = ownsMastersOfEra;
        this.eraInspiration = eraInspiration;
    }
}
