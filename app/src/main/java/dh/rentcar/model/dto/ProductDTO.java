package dh.rentcar.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private long id;
    private String name;
    private int score;
    private String qualification;
    private String description;
    private String location;
    private int security;
    private long categoryId;
    private long cityId;
}