import Search from "../components/search/search";
import { motion, Variants } from "framer-motion";
import { HeaderText, Main, Section } from "../styles/home.style";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}
