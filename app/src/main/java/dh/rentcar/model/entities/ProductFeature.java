package dh.rentcar.model.entities;

import com.fasterxml.jackson.annotation.*;


import javax.persistence.*;


@Entity
@Table(name = "product_feature")
public class ProductFeature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //FUNCIONA LA RELACION, PERO TOCA REVISAR QUE EN POSTMAN ME MUESTRE PRODUCT EN EL RESPONSE, SI LO ESTA AGREGANDO A LA BD
    @JoinColumn(name = "product_id")
    private Product product;
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "feature_id")
    private Feature feature;

    public ProductFeature() {
    }
    public ProductFeature(Product product, Feature feature, String description) {
        this.product = product;
        this.feature = feature;
        this.description = description;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public Feature getFeature() {
        return feature;
    }
    public void setFeature(Feature feature) {
        this.feature = feature;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
}