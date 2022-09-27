package dh.rentcar.controller.jwt;

import dh.rentcar.model.entities.jwt.Role;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.jwt.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @PostMapping("/new")
    public ResponseEntity<String> addRole(@RequestBody Role role) {
        roleService.addRole( role );
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Role> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        Role role = roleService.searchRoleById(id);
        return ResponseEntity.ok(role);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Role> update(@PathVariable("id") Long id, @RequestBody Role role) throws ResourceNotFoundException {
        return ResponseEntity.ok(roleService.modifyRole(id, role));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        roleService.deleteRole(id);
        return ResponseEntity.ok("Se elimino exitosamente el rol seleccionado");
    }
    @GetMapping
    public ResponseEntity<List<Role>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(roleService.getAll());
    }
}