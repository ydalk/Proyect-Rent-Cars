package dh.rentcar.model.service;

import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.dto.ProductDTO;
import dh.rentcar.model.entities.Product;
import dh.rentcar.model.entities.ProductFeature;
import dh.rentcar.model.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IBookingRepository bookingRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private ICityRepository cityRepository;
    @Autowired
    private IProductFeatureRepository productFeatureRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
    public Product searchProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }
    public Product modifyProduct(Long id, Product product) throws ResourceNotFoundException {
        Product productDB = productRepository.findById(id).orElse(null);

        if (productDB == null) {
            throw new ResourceNotFoundException("El producto con id: " + id + " no existe ");
        }

        productDB.setName(product.getName());
        productDB.setScore(product.getScore());
        productDB.setQualification(product.getQualification());
        productDB.setDescription(product.getDescription());
        productDB.setLocation(product.getLocation());
        productDB.setSecurity(product.getSecurity());
        productDB.setCategory(product.getCategory());
        productDB.setCity(product.getCity());

        return productRepository.save(productDB);
    }
    public void deleteProduct(Long id) throws ResourceNotFoundException {
        if (productRepository.findById(id).isPresent()) {
            productRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("El producto con id: " + id + " no existe");
        }
    }
    public List<Product> getAll() throws ResourceNotFoundException {
        if (productRepository.findAll().size() == 0) {
            throw new ResourceNotFoundException("No se encontró ningún producto registrado");
        }
        return productRepository.findAll();
    }
    public List<Product> getByCityId(Long id) {
        return productRepository.findByCityId(id);
    }
    public List<Product> getByCategoryId(Long id) {
        return productRepository.findByCategoryId(id);
    }
    public ProductDTO convertProductToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setName(product.getName());
        productDTO.setScore(product.getScore());
        productDTO.setQualification(product.getQualification());
        productDTO.setDescription(product.getDescription());
        productDTO.setLocation(product.getLocation());
        productDTO.setSecurity(product.getSecurity());
        productDTO.setCategoryId(product.getCategory().getId());
        productDTO.setCityId(product.getCity().getId());
        return productDTO;
    }
    public Product convertDTOToProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setName(productDTO.getName());
        product.setScore(productDTO.getScore());
        product.setQualification(productDTO.getQualification());
        product.setDescription(productDTO.getDescription());
        product.setLocation(productDTO.getLocation());
        product.setSecurity(productDTO.getSecurity());
        product.setCategory(categoryRepository.getReferenceById(productDTO.getCategoryId()));
        product.setCity(cityRepository.getReferenceById(productDTO.getCityId()));
        return product;
    }
}