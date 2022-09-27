package dh.rentcar.model.repository;

import dh.rentcar.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCityId(Long cityId );
    List<Product> findByCategoryId(Long categoryId);
}