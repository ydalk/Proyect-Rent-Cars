package dh.rentcar.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="features")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @JsonBackReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(mappedBy = "product", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Set<ProductFeature> productFeatures = new HashSet<>();

    public Feature() {
    }
    public Feature(String name, Set<ProductFeature> productFeatures) {
        this.name = name;
        this.productFeatures = productFeatures;
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
    public Set<ProductFeature> getProductFeatures() {
        return productFeatures;
    }
    public void setProductFeatures(Set<ProductFeature> productFeatures) {
        this.productFeatures = productFeatures;
    }
}
