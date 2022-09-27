package dh.rentcar.model.service;

import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.dto.BookingDTO;
import dh.rentcar.model.entities.Booking;
import dh.rentcar.model.entities.Product;
import dh.rentcar.model.entities.jwt.User;
import dh.rentcar.model.repository.IBookingRepository;
import dh.rentcar.model.repository.IProductRepository;
import dh.rentcar.model.repository.jwt.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    private IBookingRepository bookingRepository;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IUserRepository userRepository;

    public Booking addBooking(BookingDTO booking) {
        Booking forAdd = convertDTOToBooking(booking);
        return bookingRepository.save(forAdd);
    }
    public BookingDTO searchBookingById(Long id ) throws ResourceNotFoundException {
        Booking booking = bookingRepository.findById( id ).orElse( null );

        if( booking == null ) {
            throw new ResourceNotFoundException("La reserva con id: " + id + " no existe");
        }
        return convertBookingToDTO(booking);
    }
    public Booking modifyBooking(Long id, BookingDTO booking) throws ResourceNotFoundException {
        Booking bookingDB = bookingRepository.findById( id ).orElse( null );

        if( bookingDB == null ) {
            throw new ResourceNotFoundException("El rol con id: " + id + " no existe");
        }

        bookingDB.setStartTime( booking.getStartTime() );
        bookingDB.setEndTime( booking.getEndTime() );
        bookingDB.setStartDate( booking.getStartDate() );
        bookingDB.setEndDate( booking.getEndDate() );
        Product product = productRepository.findById(booking.getProduct().getId()).orElse(null);
        User user = userRepository.findById(booking.getUserId()).orElse(null);
        bookingDB.setProduct(product);
        bookingDB.setUser(user);

        return bookingRepository.save(bookingDB);
    }
    public void deleteBooking( Long id ) throws ResourceNotFoundException {
        if( bookingRepository.findById(id).isPresent() ) {
            bookingRepository.deleteById( id );
        } else {
            throw new ResourceNotFoundException("La reserva con id: " + id + " no existe");
        }
    }
    public List<BookingDTO> getAll() throws ResourceNotFoundException {
        if(bookingRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontro ninguna reserva registrada");
        }
        return bookingRepository.findAll()
                .stream()
                .map(this::convertBookingToDTO)
                .collect(Collectors.toList());
    }
    public List<BookingDTO> findByProduct(Long id) {
        return bookingRepository.findByProductId(id).stream()
                .map(this::convertBookingToDTO)
                .collect(Collectors.toList());
    }
    public List<BookingDTO> findByUser(Long id) {
        return bookingRepository.findByUserId(id).stream()
                .map(this::convertBookingToDTO)
                .collect(Collectors.toList());
    }
    private BookingDTO convertBookingToDTO(Booking booking) {
        BookingDTO bookingDTO = new BookingDTO();
        bookingDTO.setId(booking.getId());
        bookingDTO.setStartTime(booking.getStartTime());
        bookingDTO.setEndTime(booking.getEndTime());
        bookingDTO.setStartDate(booking.getStartDate());
        bookingDTO.setEndDate(booking.getEndDate());
        bookingDTO.setProduct(booking.getProduct());
        bookingDTO.setUserId(booking.getUser().getId());
        return bookingDTO;
    }
    private Booking convertDTOToBooking(BookingDTO bookingDTO) {
        Booking booking = new Booking();
        booking.setId(bookingDTO.getId());
        booking.setStartTime(bookingDTO.getStartTime());
        booking.setEndTime(bookingDTO.getEndTime());
        booking.setStartDate(bookingDTO.getStartDate());
        booking.setEndDate(bookingDTO.getEndDate());
        Product product = productRepository.findById(bookingDTO.getProduct().getId()).orElse(null);
        User user = userRepository.findById(bookingDTO.getUserId()).orElse(null);
        booking.setProduct(product);
        booking.setUser(user);
        return booking;
    }
    private List<Booking> findByDate(Date startDate, Date endDate) throws ResourceNotFoundException {
        if(bookingRepository.findAll().size() == 0 ) {
            throw new ResourceNotFoundException("No se encontro ninguna reserva registrada");
        }
        List<Booking> list = bookingRepository.findAll().stream().filter(temp -> temp.getStartDate().after(startDate) && temp.getEndDate().before(endDate)).collect(Collectors.toList());
        return list;
    }
    public Set<Long> findBookingByDateGetIdProduct(Date start_date, Date finish_date) throws ResourceNotFoundException {
        List<Booking> bookings = findByDate(start_date, finish_date);
        Set<Long> getIdProductsBookings = new HashSet<>();
        for (Booking booking : bookings) {
            getIdProductsBookings.add(booking.getProduct().getId());
        }
        return getIdProductsBookings;
    }
}