package dh.rentcar.model.dto;

import lombok.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private long userId;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String cityUser;
    @JsonProperty("role")
    private RoleDTO role;
}