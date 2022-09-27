package dh.rentcar.controller;

import dh.rentcar.model.entities.Image;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/new")
    public ResponseEntity<String> addImage(@RequestBody Image image) {
        imageService.addImage(image);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Image> searchById(@PathVariable Long id) {
        Image image = imageService.searchImageById(id);
        return ResponseEntity.ok(image);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Image> update(@PathVariable("id") Long id, @RequestBody Image image) throws ResourceNotFoundException {
        return ResponseEntity.ok(imageService.modifyImage(id, image));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        imageService.deleteImage(id);
        return ResponseEntity.ok("Se elimino exitosamente la imagen seleccionado");
    }

    @GetMapping
    public ResponseEntity<List<Image>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(imageService.getAll());
    }
}
