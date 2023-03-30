package com.nology.taylorswift;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "era_style")
public class EraStyle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image;

    @ElementCollection
    @CollectionTable(name = "era_style_description")
    @Column(name = "description")
    private List<String> description;

    @ElementCollection
    @CollectionTable(name = "era_style_key_pieces")
    @Column(name = "key_piece")
    private List<String> keyPieces;

    public EraStyle() {
    }

    public EraStyle(Long id, String image, List<String> description, List<String> keyPieces) {
        this.id = id;
        this.image = image;
        this.description = description;
        this.keyPieces = keyPieces;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getDescription() {
        return description;
    }

    public void setDescription(List<String> description) {
        this.description = description;
    }

    public List<String> getKeyPieces() {
        return keyPieces;
    }

    public void setKeyPieces(List<String> keyPieces) {
        this.keyPieces = keyPieces;
    }

}