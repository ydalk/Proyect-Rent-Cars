package dh.rentcar.controller;

import dh.rentcar.model.dto.ProductDTO;
import dh.rentcar.model.entities.Product;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.IProductRepository;
import dh.rentcar.model.service.BookingService;
import dh.rentcar.model.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private BookingService bookingService;
    @Autowired
    private IProductRepository productRepository;

    @PostMapping("/new")
    public ResponseEntity<String> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> searchById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.searchProductById(id));
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Product> update(@PathVariable("id") Long id, @RequestBody Product product) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.modifyProduct(id, product));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Se elimino exitosamente el producto seleccionado");
    }
    @GetMapping
    public ResponseEntity<List<Product>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.getAll());
    }
    @GetMapping("/cityFilter/{id}")
    public ResponseEntity<List<Product>> getByCityId(@PathVariable long id) {
        return ResponseEntity.ok(productService.getByCityId(id));
    }
    @GetMapping("/categoryFilter/{id}")
    public ResponseEntity<List<Product>> getByCategoryId(@PathVariable long id ) {
        return ResponseEntity.ok(productService.getByCategoryId(id));
    }
    @GetMapping("/byDate/{start_date}/{finish_date}")
    public ResponseEntity<List<ProductDTO>> findAvailableProducts(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date start_date, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finish_date) throws ResourceNotFoundException {
        Set<Long> idProductsBooked = bookingService.findBookingByDateGetIdProduct(start_date, finish_date);
        List<Product> productsNotBooked = new ArrayList<>();
        List<ProductDTO> forResponse = new ArrayList<>();
        productsNotBooked.addAll(productRepository.findAll().stream().filter(temp -> !idProductsBooked.contains(temp.getId())).collect(Collectors.toList()));
        for (Product product:
             productsNotBooked) {
            forResponse.add(productService.convertProductToDTO(product));
        }
        return ResponseEntity.ok(forResponse);
    }
    @GetMapping("/cityAndDateFilter/{id}/{start_date}/{end_date}")
    public ResponseEntity<List<Product>> filterByCityAndDate(@PathVariable long cityId, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date start_date, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finish_date) throws ResourceNotFoundException {
        Set<Long> idProductsBooked = bookingService.findBookingByDateGetIdProduct(start_date, finish_date);
        List<Product> filteredList = new ArrayList<>();
        for (Long pi:
                idProductsBooked) {
            filteredList.addAll(productRepository.findAll().stream().filter(temp -> !temp.getId().equals(pi) || temp.getCity().getId().equals(cityId)).collect(Collectors.toList()));
        }
        return ResponseEntity.ok(filteredList);
    }
}