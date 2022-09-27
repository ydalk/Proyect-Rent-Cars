package dh.rentcar.model.repository;

import dh.rentcar.model.entities.ProductFeature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductFeatureRepository extends JpaRepository<ProductFeature, Long> {

}
