import React from 'react'
import { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { WrapSection} from './CalendaryStyle';
import "react-datepicker/dist/react-datepicker.css";


const Calendary = ({ addValueDetail , excludedDates}) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    addValueDetail([start.toString(), end?.toString()])
  };

  registerLocale("es", es);
  setDefaultLocale("es");

  return (
    <WrapSection>

      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true}
        excludeDates={excludedDates}
        monthsShown={2}
        minDate={new Date()}
        format="dd/MM/yyyy"
        inline
      />

    </WrapSection>

  )
}

export default Calendary;
