package dh.rentcar.controller;

import dh.rentcar.exceptions.ResourceNotFoundException;
import dh.rentcar.model.dto.BookingDTO;
import dh.rentcar.model.entities.Booking;
import dh.rentcar.model.service.BookingService;
import dh.rentcar.model.service.ProductService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/reservation")
public class BookingController {
    @Autowired
    private BookingService bookingService;
    @Autowired
    private ProductService productService;

    @SneakyThrows
    @PostMapping("/new")
    public ResponseEntity<String> addBooking(@RequestBody BookingDTO booking) {
        try {
            Date dateFin = new SimpleDateFormat("yyyy-MM-dd").parse(booking.getDateFin());
            Date dateInit = new SimpleDateFormat("yyyy-MM-dd").parse(booking.getDateInit());
            booking.setEndDate(dateFin);
            booking.setStartDate(dateInit);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        bookingService.addBooking(booking);
        return ResponseEntity.ok("Se agrego exitosamente el registro");
    }
    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        BookingDTO booking = bookingService.searchBookingById(id);
        return ResponseEntity.ok(booking);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Booking> update(@PathVariable("id") Long id, @RequestBody BookingDTO bookingDTO) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.modifyBooking(id, bookingDTO));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Se elimino exitosamente la reserva seleccionada");
    }
    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.getAll());
    }
    @GetMapping("/productFilter/{id}")
    public ResponseEntity<List<BookingDTO>> getByProductId(@PathVariable long id) {
        return ResponseEntity.ok(bookingService.findByProduct(id));
    }
    @GetMapping("/userFilter/{id}")
    public ResponseEntity<List<BookingDTO>> getByUserId(@PathVariable long id) {
        return ResponseEntity.ok(bookingService.findByUser(id));
    }
}