package dh.rentcar.model.service.jwt;

import dh.rentcar.model.dto.RoleDTO;
import dh.rentcar.model.dto.UserDTO;
import dh.rentcar.model.entities.City;
import dh.rentcar.model.entities.jwt.Role;
import dh.rentcar.model.entities.jwt.User;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.jwt.IUserRepository;
import dh.rentcar.util.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private MapperUtil mapperUtil;

    public User addUser(UserDTO userDTO) {
        User user = convertDTOToUser(userDTO);
        return userRepository.save(user);
    }
    public UserDTO searchUserById( Long id ) throws ResourceNotFoundException {
        User user = userRepository.findById( id ).orElse( null );
        if( user == null ) {
            throw new ResourceNotFoundException("El usuario con id: " + id + " no existe");
        }
        return convertUserToDTO(user);
    }
    public User modifyUser( Long id, User user ) throws ResourceNotFoundException {
        User userDB = userRepository.findById( id ).orElse( null );

        if( user == null ) {
            throw new ResourceNotFoundException("El rol con id: " + id + " no existe");
        }

        userDB.setName( user.getName() );
        userDB.setLastName( user.getLastName() );
        userDB.setEmail( user.getEmail() );
        userDB.setPassword( user.getPassword() );
        userDB.setCityUser( user.getCityUser() );
        userDB.setRole( user.getRole() );

        return userRepository.save( userDB );
    }
    public void deleteUser( Long id ) throws ResourceNotFoundException {
        if( userRepository.findById(id).isPresent() ) {
            userRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("El usuario con id: " + id + " no existe");
        }
    }
    public List<UserDTO> getAll() throws ResourceNotFoundException {
        if( userRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontro ningun usuario registrado");
        }
        return userRepository.findAll()
                .stream()
                .map(this::convertUserToDTO)
                .collect(Collectors.toList());
    }
    private UserDTO convertUserToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setCityUser(user.getCityUser());
        userDTO.setRole( new RoleDTO(user.getRole().getId(),user.getRole().getName()));
        return userDTO;
    }
    private User convertDTOToUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setCityUser(userDTO.getCityUser());
        user.setRole(new Role(userDTO.getRole().getId(),userDTO.getRole().getName()));
        return user;
    }
    public UserDTO findByEmail(String email) {
        return mapperUtil.map(userRepository.findByEmail(email), UserDTO.class);
    }
}