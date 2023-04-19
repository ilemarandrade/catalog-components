import { Grid, Pagination } from "@mui/material";
import { ReactNode } from "react";

interface IShowPaginatedItems {
  count: number;
  children: ReactNode;
  onChange: (page: number) => void;
}

const ShowPaginatedItems = ({
  count,
  children,
  onChange,
}: IShowPaginatedItems) => (
  <Grid container justifyContent="center">
    {children}
    <Grid
      component={Pagination}
      count={count}
      color="primary"
      justifyContent="center"
      onChange={(event: React.ChangeEvent<unknown>, page: number) =>
        onChange(page)
      }
    />
  </Grid>
);

export default ShowPaginatedItems;
