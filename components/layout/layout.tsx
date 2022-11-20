import * as React from "react";
import Navbar from "../navbar/navbar";
import { Main } from "../../styles/home.style";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Main className={montserrat.className}>{children}</Main>
    </>
  );
}
