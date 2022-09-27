package dh.rentcar.model.service.jwt;

import dh.rentcar.model.entities.jwt.Role;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.jwt.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoleService {
    @Autowired
    private IRoleRepository roleRepository;

    public Role addRole(Role role) {
        return roleRepository.save(role);
    }
    public Role searchRoleById( Long id ) throws ResourceNotFoundException {
        Role role = roleRepository.findById( id ).orElse( null );

        if( role == null ) {
            throw new ResourceNotFoundException("El rol con id: " + id + " no existe");
        }
        return role;
    }
    public Role modifyRole( Long id, Role role ) throws ResourceNotFoundException {
        Role roleDB = roleRepository.findById( id ).orElse( null );

        if( roleDB == null ) {
            throw new ResourceNotFoundException("El rol con id: " + id + " no existe");
        }

        roleDB.setName( role.getName() );

        return roleRepository.save( roleDB );
    }
    public void deleteRole( Long id ) throws ResourceNotFoundException {
        if( roleRepository.findById(id).isPresent() ) {
            roleRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("El rol con id: " + id + " no existe");
        }
    }
    public List<Role> getAll() throws ResourceNotFoundException {
        if( roleRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontro ningun rol registrado");
        }
        return roleRepository.findAll();
    }
}