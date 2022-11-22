import Search from "../components/search/search";
import Layout from "../components/layout/layout";

// Would like to restructure this & results better.
// Currently can't move it outside of Instantsearch and don't have time.

export default function Home() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}
