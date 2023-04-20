import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

export default Providers;
