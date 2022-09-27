package dh.rentcar.model.repository;

import dh.rentcar.model.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Date;
import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByProductId(Long productId);
    List<Booking> findByUserId(Long userId);
}