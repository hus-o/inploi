import Search from "../components/search/search";
import Layout from "../components/layout/layout";
import Head from "next/head";

// Would like to restructure this & results better.
// Currently can't move it outside of Instantsearch and don't have time.

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Paradigmo</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Search />
    </Layout>
  );
}
