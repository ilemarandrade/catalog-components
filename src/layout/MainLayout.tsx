import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface IMainLayout {
  children: ReactNode;
  title: string;
}
const MainLayout = ({ children, title }: IMainLayout) => (
  <>
    <Typography variant="h1" align="center" sx={{ fontSize: 32, mb: 8 }}>
      {title}
    </Typography>
    {children}
  </>
);

export default MainLayout;
