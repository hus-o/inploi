import Search from "../components/search/search";
import { motion, Variants } from "framer-motion";
import { HeaderText, Main, Section } from "../styles/home.style";
import { useState } from "react";
import Layout from "../components/layout/layout";

export default function Home() {
  const [searched, setSearched] = useState(false);

  return (
    <Layout>
      <Section
        as={motion.div}
        initial={{ position: "absolute", top: "50%", y: "-50%" }}
        animate={searched && { top: "0", y: "0" }}
        transition={{ duration: 1 }}
      >
        <HeaderText>
          Find a job you love 🫶
          <br /> with Paradigmo
        </HeaderText>
        <Search setSearched={setSearched} />
      </Section>
    </Layout>
  );
}
