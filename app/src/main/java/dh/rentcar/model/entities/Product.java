package dh.rentcar.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private Integer score;
    @Column
    private String qualification;
    @Column
    private String description;
    @Column
    private String location;
    @Column
    private Integer security;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "city_id", nullable = false)
    private City city;
    /* @JsonBackReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductFeature> productFeatures = new HashSet<>(); */

    public Product() {
    }
    public Product(String name, Integer score, String qualification, String description, String location, Integer security, Category category, City city, double longitude) {
        this.name = name;
        this.score = score;
        this.qualification = qualification;
        this.description = description;
        this.location = location;
        this.security = security;
        this.category = category;
        this.city = city;
    }
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
    public Integer getScore() {
        return score;
    }
    public void setScore(Integer score) {
        this.score = score;
    }
    public String getQualification() {
        return qualification;
    }
    public void setQualification(String qualification) {
        this.qualification = qualification;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public Integer getSecurity() {
        return security;
    }
    public void setSecurity(Integer security) {
        this.security = security;
    }
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
    public City getCity() {
        return city;
    }
    public void setCity(City city) {
        this.city = city;
    }

}