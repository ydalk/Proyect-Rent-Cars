package dh.rentcar.model.service;

import dh.rentcar.model.entities.City;
import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.repository.ICityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    private ICityRepository cityRepository;

    public City addCity(City city) {
        return cityRepository.save(city);
    }

    public City searchCityById( Long id ) throws ResourceNotFoundException {
        City city = cityRepository.findById( id ).orElse( null );

        if( city == null ) {
            throw new ResourceNotFoundException("La ciudad con id: " + id + " no existe");
        }
        return city;
    }

    public City modifyCity( Long id, City city ) throws ResourceNotFoundException {
        City cityDB = cityRepository.findById( id ).orElse( null );

        if( cityDB == null ) {
            throw new ResourceNotFoundException("La ciudad con id: " + id + " no existe");
        }

        cityDB.setCountry( city.getCountry() );
        cityDB.setName( city.getName() );

        return cityRepository.save( cityDB );
    }

    public void deleteCity( Long id ) throws ResourceNotFoundException {
        if( cityRepository.findById(id).isPresent() ) {
            cityRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("La ciudad con id: " + id + " no existe");
        }
    }

    public List<City> getAll() throws ResourceNotFoundException {
        if( cityRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontro ninguna ciudad registrada");
        }
        return cityRepository.findAll();
    }
}