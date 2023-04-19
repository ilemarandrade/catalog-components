import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default Providers;
