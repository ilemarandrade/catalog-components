import { Grid, Typography } from "@mui/material";
import DateTimePickerWithTimezone from "../components/DateTimePickerWithTimezone";
import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const ShowComponentToDate = () => {
  const [date, setDate] = useState<Dayjs | undefined>();

  const onChangeDate = (newDate: Dayjs) => {
    setDate(newDate);
  };

  return (
    <MainLayout title="-4 Componente para manejo de fechas">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          {date && (
            <Typography>
              Hora seleccionada:{" "}
              <span>{dayjs(date).format("DD/MM/YYYY h:mm a")}</span>
            </Typography>
          )}
        </Grid>
        <Grid item sm={4} md={2}>
          <DateTimePickerWithTimezone onChange={onChangeDate} />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ShowComponentToDate;
