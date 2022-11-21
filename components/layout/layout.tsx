import * as React from "react";
import Navbar from "../navbar/navbar";
import { Main } from "../../styles/home.style";
import { Montserrat } from "@next/font/google";
import { SearchProvider } from "../../contexts/search-context";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <Navbar />
      <Main className={montserrat.className}>{children}</Main>
    </SearchProvider>
  );
}
