package dh.rentcar.controller;

import dh.rentcar.model.dto.FeatureDTO;
import dh.rentcar.model.entities.Feature;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/features")
public class FeatureController {
    @Autowired
    private FeatureService featureService;

    @PostMapping("/new")
    public ResponseEntity<String> addFeature(@RequestBody FeatureDTO feature) {
        featureService.addFeature(feature);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Feature> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        Feature feature = featureService.searchFeatureById(id);
        return ResponseEntity.ok(feature);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Feature> update(@PathVariable("id") Long id, @RequestBody Feature feature) throws ResourceNotFoundException {
        return ResponseEntity.ok(featureService.modifyFeature(id, feature));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        featureService.deleteFeature(id);
        return ResponseEntity.ok("Se elimino exitosamente la categoría seleccionada");
    }
    @GetMapping
    public ResponseEntity<List<Feature>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(featureService.getAll());
    }
}
