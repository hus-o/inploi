import algoliasearch from "algoliasearch";
import { RequestOptions, QueryParameters } from "@algolia/transporter";
import Results from "../results/results";
import {
  Configure,
  InstantSearch,
  useInstantSearch,
} from "react-instantsearch-hooks-web";
import { StyledSearchBox } from "./search.style";
import React, { ReactNode } from "react";

const algoliaClient = algoliasearch(
  "RY8KA2GJPX",
  "13e751a21f2ae69d7ccb7b590a0a9b3a"
);

const EmptyQueryBoundary = ({
  children,
  fallback,
}: {
  children: JSX.Element;
  fallback: null;
}) => {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
};

interface SearchProps {
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchProps> = ({ setSearched }) => {
  return (
    <InstantSearch
      indexName="development_jobs_index"
      searchClient={algoliaClient}
    >
      <StyledSearchBox
        onSubmit={() => setSearched(true)}
        searchAsYouType={false}
        placeholder="Search jobs by keyword or location"
      />
      <EmptyQueryBoundary fallback={null}>
        <Results />
      </EmptyQueryBoundary>
    </InstantSearch>
  );
};

export default Search;
