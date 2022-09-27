package dh.rentcar.controller.jwt;

import dh.rentcar.model.dto.UserDTO;
import dh.rentcar.model.entities.jwt.User;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.service.jwt.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/new")
    public ResponseEntity<HashMap<String, Object>> addUser(@RequestBody UserDTO userDTO) {
        HashMap<String, Object> response = new HashMap<>();
        String pass = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(pass);
        response.put("Added", userDTO);
        userService.addUser( userDTO );
        return ResponseEntity.ok(response);
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        UserDTO user = userService.searchUserById(id);
        return ResponseEntity.ok(user);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<User> update(@PathVariable("id") Long id, @RequestBody User user) throws ResourceNotFoundException {
        return ResponseEntity.ok(userService.modifyUser(id, user));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        userService.deleteUser(id);
        return ResponseEntity.ok("Se elimino exitosamente el usuario seleccionado");
    }
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(userService.getAll());
    }
}