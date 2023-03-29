package com.nology.taylorswift;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

import static jdk.internal.math.FloatingDecimal.parseDouble;
import static jdk.internal.math.FloatingDecimal.parseFloat;

@Repository
public class ErasRepository {

    private final ArrayList<Era> eras = new ArrayList<>();

    public String addEra(Era era) {
        eras.add(era);
        return "You added an era";
    }

    public ArrayList<Era> getAllEras() {
        return eras;
    }

    public Era getErasById(long id) {
        for (Era era : eras) {
            if (era.getEraId() == id) {
                return era;
            }
        }
        return null;
    }

    public boolean hasEra(long id) {
        for (Era era : eras) {
            if (era.getEraId() == id) {
                return true;
            }
        }
        return false;
    }

    public ArrayList<Era> ownsMastersOfEras() {
        ArrayList<Era> mastersEras = new ArrayList<Era>();
        for (Era era : eras) {
            if (era.isOwnsMastersOfEra()) {
                mastersEras.add(era);
            }
        }
        return mastersEras;
    }

    public ArrayList<Era> highlyRated() {
        ArrayList<Era> highRating = new ArrayList<Era>();
        for (Era era : eras) {
            if (Double.parseDouble(era.getAlbumOfEra().get("rating")) > (double) (7.7)) {
                highRating.add(era);
            }
        }
        return highRating;
    }

    public ArrayList<Era> highlyRatedAndMasters() {
        ArrayList<Era> highRatingAndMasters = new ArrayList<Era>();
        for (Era era : eras) {
            if ((Double.parseDouble(era.getAlbumOfEra().get("rating")) > (double) (7.7)) && era.isOwnsMastersOfEra()) {
                highRatingAndMasters.add(era);
            }
        }
        return highRatingAndMasters;
    }

}
