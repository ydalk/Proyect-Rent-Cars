package dh.rentcar.model.service;

import dh.rentcar.model.entities.Category;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;

    public Category addCategory(Category category) {
        return categoryRepository.save( category );
    }
    public Category searchCategoryById( Long id ) throws ResourceNotFoundException {
        Category category = categoryRepository.findById( id ).orElse( null );
        if(category == null ) {
            throw new ResourceNotFoundException("Lacategoría con id: " + id + " no existe");
        }
        return category;
    }
    public Category modifyCategory( Long id, Category category ) throws ResourceNotFoundException {
        Category categoryDB = categoryRepository.findById( id ).orElse(null );
        if( categoryDB == null ) {
            throw new ResourceNotFoundException( "La categoría con id: " + id + " no existe");
        }

        categoryDB.setId( category.getId() );
        categoryDB.setTitle( category.getTitle() );
        categoryDB.setDescription( category.getDescription() );
        categoryDB.setImgUrl( category.getImgUrl() );

        return categoryRepository.save( categoryDB );
    }
    public void deleteCategory( Long id ) throws ResourceNotFoundException {
        if( categoryRepository.findById(id).isPresent() ) {
            categoryRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("La categoría con id: " + id + " no existe");
        }
    }
    public List<Category> getAll() throws ResourceNotFoundException {
        if( categoryRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontró ninguna categoría registrada");
        }

        return categoryRepository.findAll();


    }
}
