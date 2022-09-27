package dh.rentcar.controller;

import dh.rentcar.model.dto.ProductFeatureDTO;
import dh.rentcar.model.entities.ProductFeature;
import dh.rentcar.exceptions.BadRequestException;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.ProductFeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productFeature")
public class ProductFeatureController {
    @Autowired
    private ProductFeatureService productFeatureService;

    @PostMapping("/new")
    public ResponseEntity<String> addProductFeature(@RequestBody ProductFeatureDTO productFeature) throws BadRequestException {
        productFeatureService.addProductFeature(productFeature);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductFeature> searchById(@PathVariable Long id) {
        ProductFeature productFeature = productFeatureService.searchById( id );
        return ResponseEntity.ok(productFeature);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ProductFeature> update(@PathVariable("id") Long id, @RequestBody ProductFeature productFeature) throws ResourceNotFoundException {
        return ResponseEntity.ok(productFeatureService.modify(id, productFeature));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        productFeatureService.deletePF( id );
        return ResponseEntity.ok("Se eliminó exitosamente la relación product y feature asociada al id: " + id + " !!!");
    }
    @GetMapping
    public ResponseEntity<List<ProductFeature>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(productFeatureService.getAll());
    }
}
