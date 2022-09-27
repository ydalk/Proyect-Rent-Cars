package dh.rentcar.model.entities;

import javax.persistence.*;

@Entity
@Table(name="cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String country;

    public City() {
    }
    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }
    public City(Long id, String name, String country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
}