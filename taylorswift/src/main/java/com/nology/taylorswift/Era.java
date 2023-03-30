package com.nology.taylorswift;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "era")
public class Era {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eraID;

    @Column(name = "era_name")
    private String eraName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "album_id", referencedColumnName = "id")
    private Album albumOfEra;

    @Column(name = "era_description")
    private String eraDescription;

    @ElementCollection
    @CollectionTable(name = "era_color_scheme")
    @Column(name = "color")
    private List<String> eraColorScheme;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "era_style_id", referencedColumnName = "id")
    private EraStyle eraStyle;

    @Column(name = "era_iconic_quote")
    private String eraIconicQuote;

    @Column(name = "owns_masters_of_era")
    private boolean ownsMastersOfEra;

    @ElementCollection
    @CollectionTable(name = "era_inspiration")
    @Column(name = "inspiration")
    private List<String> eraInspiration;

    public Era() {
    }

    public Long getEraID() {
        return eraID;
    }

    public void setEraID(Long eraID) {
        this.eraID = eraID;
    }

    public String getEraName() {
        return eraName;
    }

    public void setEraName(String eraName) {
        this.eraName = eraName;
    }

    public Album getAlbumOfEra() {
        return albumOfEra;
    }

    public void setAlbumOfEra(Album albumOfEra) {
        this.albumOfEra = albumOfEra;
    }

    public String getEraDescription() {
        return eraDescription;
    }

    public void setEraDescription(String eraDescription) {
        this.eraDescription = eraDescription;
    }

    public List<String> getEraColorScheme() {
        return eraColorScheme;
    }

    public void setEraColorScheme(List<String> eraColorScheme) {
        this.eraColorScheme = eraColorScheme;
    }

    public EraStyle getEraStyle() {
        return eraStyle;
    }

    public void setEraStyle(EraStyle eraStyle) {
        this.eraStyle = eraStyle;
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

    public List<String> getEraInspiration() {
        return eraInspiration;
    }

    public void setEraInspiration(List<String> eraInspiration) {
        this.eraInspiration = eraInspiration;
    }

    public Era(Long eraID, String eraName, Album albumOfEra, String eraDescription, List<String> eraColorScheme, EraStyle eraStyle, String eraIconicQuote, boolean ownsMastersOfEra, List<String> eraInspiration) {
        this.eraID = eraID;
        this.eraName = eraName;
        this.albumOfEra = albumOfEra;
        this.eraDescription = eraDescription;
        this.eraColorScheme = eraColorScheme;
        this.eraStyle = eraStyle;
        this.eraIconicQuote = eraIconicQuote;
        this.ownsMastersOfEra = ownsMastersOfEra;
        this.eraInspiration = eraInspiration;
    }
}