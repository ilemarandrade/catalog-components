import React, { useState } from "react";
import "moment/locale/es";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface IDateTimePicker {
  onChange: (date: Dayjs) => void;
}

const DateTimePickerWithTimezone = ({ onChange }: IDateTimePicker) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
      onChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Selecciona fecha y hora"
        value={selectedDate}
        onChange={handleDateChange}
        format="DD/MM/YYYY h:mm a"
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerWithTimezone;
