import { Grid, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface IShowPaginatedItems {
  count: number;
  children: ReactNode;
  onChange: (page: number) => void;
  page: number;
}

const ShowPaginatedItems = ({
  count,
  children,
  onChange,
  page,
}: IShowPaginatedItems) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOnChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    onChange(newPage);
  };

  return (
    <Grid container justifyContent="center">
      {children}
      <Grid
        component={Pagination}
        count={count}
        color="primary"
        justifyContent="center"
        onChange={handleOnChange}
        sx={{ mt: 3 }}
        siblingCount={isMobile ? 0 : 1}
        page={page}
      />
    </Grid>
  );
};

export default ShowPaginatedItems;
