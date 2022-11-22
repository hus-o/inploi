import styled from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultsCard = styled.div`
  max-width: 500px;
  width: calc(100% - 20px);
  display: flex;
  background-color: #fcfaf9;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  height: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
  -webkit-box-shadow: 0px 0px 10px 2px rgb(204 204 204);
  -moz-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 10px 2px rgb(204 204 204);
`;

export const CardDetailsContainer = styled.div`
  margin-left: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333333;
  position: relative;
`;

export const PayContainer = styled.div`
  display: flex;
`;

interface CardHeaderProps {
  description?: boolean;
}
export const CardHeader = styled.h2<CardHeaderProps>`
  font-size: 24px;
  font-weight: 600;
  line-height: 25px;

  margin-bottom: ${(props) => (props.description ? "10px" : "0")};

  ~ div,
  ~ p {
    font-size: 14px;
  }
`;

export const CardCountryCity = styled.p`
  display: flex;
  align-items: center;
`;

export const CardDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #333333;
  height: 100%;
  font-size: 14px;
`;

export const CardApply = styled.a`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  right: 0;
  margin: 10px;
  align-items: center;
  background-image: linear-gradient(144deg, #fee6e3, #c8b2b0 50%, #e63946);
  border: 0;
  border-radius: 8px;
  box-shadow: rgb(151 65 252 / 20%) 0 2px 5px -5px
  box-sizing: border-box;
  color: #333333;
  display: flex;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 80px;
  padding: 2px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
    color: #fee6e3;
  }

  span {
    background-color: #fee6e3;
    padding: 6px 6px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    text-align: center;
  }

  &:hover span {
    background: none;
  }
`;

export const CardDescriptionContent = styled.div`
  height: 55%;
  overflow: scroll;

  @media (max-width: 500px) {
    font-size: 12px !important;
  }
`;

export const CardPay = styled.div`
  display: flex;
`;
export const CardPayType = styled.p`
  margin-left: 5px;
`;

export const CardLocEmpContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
  margin: 10px;
  cursor: pointer;
`;

export const StyledLocationIcon = styled(MdOutlineLocationOn)`
  width: 16px;
  height: 16px;
  color: #333333;
  margin-right: 5px;
`;

export const StyledOfficeIcon = styled(HiOutlineOfficeBuilding)`
  width: 16px;
  height: 16px;
  color: #333333;
  margin-right: 5px;
`;

export const StyledPersonIcon = styled(BsPerson)`
  width: 16px;
  height: 16px;
  color: #333333;
  margin-right: 5px;
  margin-left: 10px;
`;

export const StyledMoneyIcon = styled(FaMoneyBillAlt)`
  width: 16px;
  height: 16px;
  color: #333333;
  margin-right: 5px;
`;
