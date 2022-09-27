package dh.rentcar.model.service;

import dh.rentcar.model.entities.Image;

import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    private IImageRepository imageRepository;

    public Image addImage(Image image) {
        return imageRepository.save( image );
    }

    public Image searchImageById( Long id ) {
        return imageRepository.findById( id ).orElse( null );
    }

    public Image modifyImage(Long id, Image image) throws ResourceNotFoundException {
        Image imageDB = imageRepository.findById(id).orElse( null );

        if( imageDB == null ) {
            throw new ResourceNotFoundException("La imagen con id: " + id + " no existe");
        }

        imageDB.setImgUrl( image.getImgUrl());
        imageDB.setProduct( image.getProduct());
        imageDB.setTitle( image.getTitle());

        return imageRepository.save(imageDB);
    }

    public void deleteImage( Long id ) throws ResourceNotFoundException {
        if( imageRepository.findById(id).isPresent()) {
            imageRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("La imagen con id: " + id + " no existe");
        }
    }

    public List<Image> getAll() throws ResourceNotFoundException {
        if( imageRepository.findAll().size() == 0) {
            throw new ResourceNotFoundException("No se encontró ninguna imagen registrada");
        }
        return imageRepository.findAll();
    }



}
