import {
  Grid,
  Pagination,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
}: IShowPaginatedItems) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
        sx={{ mt: 3 }}
        siblingCount={isMobile ? 0 : 1}
      />
    </Grid>
  );
};

export default ShowPaginatedItems;
