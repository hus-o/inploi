import algoliasearch from "algoliasearch";
import Results from "../results/results";
import { InstantSearch, useInstantSearch } from "react-instantsearch-hooks-web";
import { StyledSearchBox } from "./search.style";
import React, { useContext, useEffect } from "react";
import { Section, HeaderText } from "../../styles/home.style";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { SearchContext } from "../../contexts/search-context";
import NotFound from "../not-found/not-found";

const algoliaClient = algoliasearch(
  "RY8KA2GJPX",
  "13e751a21f2ae69d7ccb7b590a0a9b3a"
);

// Didn't like the results being displayed without searching, this handles that
// and initial empty searches
export const EmptyQueryBoundary = ({
  children,
  fallback,
}: {
  children: JSX.Element;
  fallback: null;
}) => {
  const { indexUiState } = useInstantSearch();
  const { searched } = useContext(SearchContext);

  if (searched && !indexUiState.query) {
    return <NotFound />;
  }

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
};

const Search: React.FC = () => {
  const { searched, setSearched } = useContext(SearchContext);

  return (
    <InstantSearch
      indexName="development_jobs_index"
      searchClient={algoliaClient}
    >
      <Section
        as={motion.div}
        initial={{ y: "calc(50vh - 140px)" }}
        animate={searched && { y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderText>
          Find a job you love 🫶
          <br /> with Paradigmo
        </HeaderText>
        <StyledSearchBox
          onSubmit={() => setSearched(true)}
          searchAsYouType={false}
          placeholder="Search jobs by keyword or location"
        />
      </Section>
      <EmptyQueryBoundary fallback={null}>
        <Results />
      </EmptyQueryBoundary>
    </InstantSearch>
  );
};

export default Search;
