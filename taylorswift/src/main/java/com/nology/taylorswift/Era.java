package com.nology.taylorswift;

import java.util.ArrayList;
import java.util.HashMap;

public class Era {

    private String eraName;
    private long eraId;
    private HashMap<String, String> albumOfEra;
    private String eraDescription;
    private ArrayList<String> eraColorScheme;
    private HashMap<String, ArrayList<String>> eraStyle;

    private String eraIconicQuote;
    private boolean ownsMastersOfEra;
    private ArrayList<String> eraInspiration;

    public Era() {
    }

    public Era(String eraName, long eraId, HashMap<String, String> albumOfEra, String eraDescription, ArrayList<String> eraColorScheme, HashMap<String, ArrayList<String>> eraStyle, String eraIconicQuote, boolean ownsMastersOfEra, ArrayList<String> eraInspiration) {
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

    public String getEraName() {
        return eraName;
    }

    public void setEraName(String eraName) {
        this.eraName = eraName;
    }

    public long getEraId() {
        return eraId;
    }

    public void setEraId(long eraId) {
        this.eraId = eraId;
    }

    public HashMap<String, String> getAlbumOfEra() {
        return albumOfEra;
    }

    public void setAlbumOfEra(HashMap<String, String> albumOfEra) {
        this.albumOfEra = albumOfEra;
    }

    public String getEraDescription() {
        return eraDescription;
    }

    public void setEraDescription(String eraDescription) {
        this.eraDescription = eraDescription;
    }

    public ArrayList<String> getEraColorScheme() {
        return eraColorScheme;
    }

    public void setEraColorScheme(ArrayList<String> eraColorScheme) {
        this.eraColorScheme = eraColorScheme;
    }



    public String getEraIconicQuote() {
        return eraIconicQuote;
    }

    public void setEraIconicQuote(String eraIconicQuote) {
        this.eraIconicQuote = eraIconicQuote;
    }

    public boolean isOwnsMastersOfEra() {
        return ownsMastersOfEra;
    }

    public void setOwnsMastersOfEra(boolean ownsMastersOfEra) {
        this.ownsMastersOfEra = ownsMastersOfEra;
    }

    public ArrayList<String> getEraInspiration() {
        return eraInspiration;
    }

    public void setEraInspiration(ArrayList<String> eraInspiration) {
        this.eraInspiration = eraInspiration;
    }

    public HashMap<String, ArrayList<String>> getEraStyle() {
        return eraStyle;
    }

    public void setEraStyle(HashMap<String, ArrayList<String>> eraStyle) {
        this.eraStyle = eraStyle;
    }
}
