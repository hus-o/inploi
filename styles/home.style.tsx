import styled from "styled-components";

export const HeaderText = styled.h1`
  color: #333333;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Main = styled.main`
  position: relative;
  height: calc(100vh - 90px);
  padding: 10px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
