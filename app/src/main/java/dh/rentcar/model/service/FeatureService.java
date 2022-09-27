package dh.rentcar.model.service;

import dh.rentcar.model.dto.BookingDTO;
import dh.rentcar.model.dto.FeatureDTO;
import dh.rentcar.model.entities.Booking;
import dh.rentcar.model.entities.Feature;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.entities.Product;
import dh.rentcar.model.entities.jwt.User;
import dh.rentcar.model.repository.IFeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class FeatureService {
    @Autowired
    private IFeatureRepository featureRepository;

    public FeatureDTO addFeature(FeatureDTO feature) {
        featureRepository.save( convertDTOToFeature(feature) );
        return feature;
    }
    public Feature searchFeatureById( Long id ) throws ResourceNotFoundException {
        Feature feature = featureRepository.findById( id ).orElse( null );
        if(feature == null ) {
            throw new ResourceNotFoundException("La característica con id " + id + " no existe");
        }
        return feature;
    }
    public Feature modifyFeature( Long id, Feature feature ) throws ResourceNotFoundException {
        Feature featureDB = featureRepository.findById( id ).orElse( null );

        if( featureDB == null ) {
            throw new ResourceNotFoundException( "La característica con id " + id + " no existe");
        }

        featureDB.setName( feature.getName());

        return featureRepository.save( featureDB );
    }
    public void deleteFeature( Long id ) throws ResourceNotFoundException {
        if( featureRepository.findById( id ).isPresent() ) {
            featureRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("La categoría con id: " + id + " no existe");
        }
    }
    public List<Feature> getAll() throws ResourceNotFoundException {
        if( featureRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontró ninguna característica registrada");
        }
        return featureRepository.findAll();
    }
    private FeatureDTO convertFeatureToDTO(Feature feature) {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setId(feature.getId());
        featureDTO.setName(feature.getName());
        return featureDTO;
    }
    private Feature convertDTOToFeature(FeatureDTO featureDTO) {
        Feature feature = new Feature();
        feature.setId(featureDTO.getId());
        feature.setName(featureDTO.getName());
        feature.setProductFeatures(new HashSet<>());
        return feature;
    }
}
