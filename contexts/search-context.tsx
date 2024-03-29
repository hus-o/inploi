import React from "react";

interface SearchContext {
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children?: React.ReactNode;
};

export const SearchContext = React.createContext<SearchContext>({
  searched: false,
  setSearched: () => null,
  isOpen: false,
  setIsOpen: () => null,
});

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [searched, setSearched] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={{
        searched,
        setSearched,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
