package dh.rentcar.controller;

import dh.rentcar.model.entities.Category;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/new")
    public ResponseEntity<String> addCategory(@RequestBody Category category) {
        categoryService.addCategory(category);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Category> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        Category category = categoryService.searchCategoryById(id);
        return ResponseEntity.ok(category);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> update(@PathVariable("id") Long id, @RequestBody Category category) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.modifyCategory(id, category));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Se elimino exitosamente la categoría seleccionada");
    }
    @GetMapping
    public ResponseEntity<List<Category>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.getAll());
    }
}
