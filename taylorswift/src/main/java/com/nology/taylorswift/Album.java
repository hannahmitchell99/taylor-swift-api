package com.nology.taylorswift;


import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "album")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String genre;

    private double rating;

    private String cover;

    @Column(name = "peak_chart_position")
    private int peakChartPosition;

    @Column(name = "num_of_songs")
    private int numOfSongs;

    @Column(name = "date_released")
    private LocalDate dateReleased;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public int getPeakChartPosition() {
        return peakChartPosition;
    }

    public void setPeakChartPosition(int peakChartPosition) {
        this.peakChartPosition = peakChartPosition;
    }

    public int getNumOfSongs() {
        return numOfSongs;
    }

    public void setNumOfSongs(int numOfSongs) {
        this.numOfSongs = numOfSongs;
    }

    public LocalDate getDateReleased() {
        return dateReleased;
    }

    public void setDateReleased(LocalDate dateReleased) {
        this.dateReleased = dateReleased;
    }

    public Album() {
    }

    public Album(Long id, String name, String genre, double rating, String cover, int peakChartPosition, int numOfSongs, LocalDate dateReleased) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.rating = rating;
        this.cover = cover;
        this.peakChartPosition = peakChartPosition;
        this.numOfSongs = numOfSongs;
        this.dateReleased = dateReleased;
    }
}