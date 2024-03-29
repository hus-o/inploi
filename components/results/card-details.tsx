import { useState } from "react";
import CardDescriptionSection from "./card-description";
import { IHit } from "./results";
import {
  CardDetailsContainer,
  PayContainer,
  CardHeader,
  CardCountryCity,
  CardPay,
  CardPayType,
  StyledLocationIcon,
  StyledOfficeIcon,
  CardLocEmpContainer,
  StyledPersonIcon,
  StyledMoneyIcon,
  IconContainer,
} from "./results.style";
import { AnimatePresence, motion } from "framer-motion";
import { BsBoxArrowRight, BsBoxArrowLeft } from "react-icons/bs";

interface CardDetailsProps extends Omit<IHit, "apply_url" | "expires_at"> {
  id: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  country,
  city,
  location_type,
  employment_type,
  pay_currency,
  pay,
  pay_type,
  description,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // The logic and structuring here is to play nice with AnimatePresence
  return (
    <CardDetailsContainer>
      <CardDescriptionSection
        description={description}
        isOpen={isOpen}
        id={id}
      />
      {!isOpen && (
        <CardKeyView
          title={title}
          country={country}
          city={city}
          location_type={location_type}
          employment_type={employment_type}
          pay_currency={pay_currency}
          pay={pay}
          pay_type={pay_type}
        />
      )}
      <AnimatePresence initial={false} mode="wait">
        <IconContainer
          as={motion.div}
          onClick={() => setIsOpen((prev) => !prev)}
          key={isOpen ? "left" : "right"}
          initial={{
            rotate: isOpen ? -90 : 90,
          }}
          animate={{
            zIndex: 1,
            rotate: 0,
            transition: {
              type: "tween",
              duration: 0.15,
              ease: "circOut",
            },
          }}
          exit={{
            zIndex: 0,
            rotate: isOpen ? -90 : 90,
            transition: {
              type: "tween",
              duration: 0.15,
              ease: "circIn",
            },
          }}
        >
          {isOpen ? (
            <BsBoxArrowRight size={24} />
          ) : (
            <BsBoxArrowLeft size={24} />
          )}
        </IconContainer>
      </AnimatePresence>
    </CardDetailsContainer>
  );
};

const CardKeyView: React.FC<
  Omit<IHit, "description" | "apply_url" | "expires_at">
> = ({
  title,
  country,
  city,
  location_type,
  employment_type,
  pay_currency,
  pay,
  pay_type,
}) => {
  const isRemote = location_type === "Remote";
  return (
    <>
      <CardHeader>{title}</CardHeader>
      <CardCountryCity>
        <StyledLocationIcon />
        {!isRemote ? `${country}, ${city}` : country}
      </CardCountryCity>
      <CardLocEmpContainer>
        <StyledOfficeIcon />
        <p>{location_type}</p>
        <StyledPersonIcon />
        <p>{employment_type}</p>
      </CardLocEmpContainer>
      <PayContainer>
        <StyledMoneyIcon />
        <CardPay>
          {pay_currency} {pay}
          <CardPayType>{pay_type}</CardPayType>
        </CardPay>
      </PayContainer>
    </>
  );
};

export default CardDetails;
