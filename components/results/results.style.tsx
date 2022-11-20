import styled from "styled-components";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // overflow: auto;
`;

export const ResultsCard = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  background-color: #fcfaf9;
  padding: 10px;
  border-radius: 10px;
  height: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
  -webkit-box-shadow: 0px 0px 20px 5px rgb(204 204 204);
  -moz-box-shadow: 0px 0px 20px 5px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 5px rgb(204 204 204);
`;

export const CardDetailsContainer = styled.div`
  margin-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333333;
`;

export const PayContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 35%;
  justify-content: space-between;
`;

export const CardCompanyName = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 25px;
`;

export const CardLocationDetails = styled.div`
  display: flex;
`;
export const CardCountryCity = styled.p``;

export const CardLocationType = styled.p`
  margin-left: 10px;
`;

export const CardEmploymentType = styled.p``;

export const CardPay = styled.p``;
export const CardPayType = styled.p``;
export const CardCurrency = styled.p``;
export const StyledChevronDown = styled(MdExpandMore)``;
