import styled from "styled-components";
import { SearchBox } from "react-instantsearch-hooks-web";

export const StyledSearchBox = styled(SearchBox)`
  width: 75%;
  height: 50px;
  border-radius: 10px;

  .ais-SearchBox-input,
  .ais-SearchBox-form {
    width: 100%;
    height: 100%;
  }

  .ais-SearchBox-input {
    -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.75);
    border: none;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    background-color: #fcfaf9;
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;
