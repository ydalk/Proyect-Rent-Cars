package dh.rentcar.model.service;

import dh.rentcar.model.dto.ProductFeatureDTO;
import dh.rentcar.model.entities.Feature;
import dh.rentcar.model.entities.Product;
import dh.rentcar.model.entities.ProductFeature;
import dh.rentcar.exceptions.BadRequestException;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.IFeatureRepository;
import dh.rentcar.model.repository.IProductFeatureRepository;
import dh.rentcar.model.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductFeatureService {
    @Autowired
    private IProductFeatureRepository productFeatureRepository;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IFeatureRepository featureRepository;

    public ProductFeature addProductFeature( ProductFeatureDTO productFeature ) throws BadRequestException {
        ProductFeature productFeature1 = new ProductFeature();
        productFeature1.setDescription(productFeature.getDescription());
        Product product = productRepository.findById( productFeature.getProductId()).orElse( null );
        productFeature1.setProduct(product);
        Feature feature = featureRepository.findById( productFeature.getFeatureId()).orElse( null );
        productFeature1.setFeature( feature);

        if( product == null & feature == null ) {
            throw new BadRequestException("Para generar este registro tanto product y feature deben ser diferente de null");
        }
        return productFeatureRepository.save( productFeature1 );
    }
    public ProductFeature searchById( Long id ) {
        return productFeatureRepository.findById( id ).orElse( null );
    }
    public ProductFeature modify( Long id, ProductFeature productFeature) throws ResourceNotFoundException {
        ProductFeature productFeatureDB = productFeatureRepository.findById( id ).orElse( null );

        if( productFeatureDB == null ) {
            throw new ResourceNotFoundException("La relación producto feature con id: " + id + " no existe");
        }

        Product product = productRepository.findById( productFeature.getProduct().getId()).orElse( null );
        productFeatureDB.setProduct(product);

        Feature feature = featureRepository.findById( productFeature.getFeature().getId()).orElse( null );
        productFeatureDB.setFeature( feature);

        return productFeatureRepository.save(productFeature);

    }
    public void deletePF( Long id ) throws ResourceNotFoundException {
        if( productFeatureRepository.findById(id).isPresent()) {
            productFeatureRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException(" La relación product feature con id: " + id + " no existe");
        }
    }
    public List<ProductFeature> getAll() throws ResourceNotFoundException {
        if( productFeatureRepository.findAll().size() == 0) {
            throw new ResourceNotFoundException("No se encontró ningún registro");
        }
        return productFeatureRepository.findAll();
    }
}
