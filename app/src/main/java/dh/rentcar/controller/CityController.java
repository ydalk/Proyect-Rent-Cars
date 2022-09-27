package dh.rentcar.controller;

import dh.rentcar.model.entities.City;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    private CityService cityService;

    @PostMapping("/new")
    public ResponseEntity<String> addCity(@RequestBody City city) {
        cityService.addCity( city );
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        City city = cityService.searchCityById(id);
        return ResponseEntity.ok(city);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<City> update(@PathVariable("id") Long id, @RequestBody City city) throws ResourceNotFoundException {
        return ResponseEntity.ok(cityService.modifyCity(id, city));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        cityService.deleteCity(id);
        return ResponseEntity.ok("Se elimino exitosamente la ciudad seleccionada");
    }

    @GetMapping
    public ResponseEntity<List<City>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(cityService.getAll());
    }
}
