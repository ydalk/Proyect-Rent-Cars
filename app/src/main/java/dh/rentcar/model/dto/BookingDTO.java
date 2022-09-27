package dh.rentcar.model.dto;

import dh.rentcar.model.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Time;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookingDTO {
    private long id;
    private Time startTime;
    private Time endTime;
    private Date startDate;
    private String dateInit;
    private String dateFin;
    private Date endDate;
    private Product product;
    private long userId;
}