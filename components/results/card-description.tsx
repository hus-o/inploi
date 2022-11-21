import { CardDescription, CardHeader } from "./results.style";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";

interface CardDescriptionProps {
  isOpen: boolean;
  description: string;
}

const CardDescriptionSection: React.FC<CardDescriptionProps> = ({
  isOpen,
  description,
}) => {
  const descriptionVariants: Variants = {
    hidden: {
      x: "100%",
      display: "none",
      opacity: 0,
      backgroundColor: "transparent",
    },
    show: {
      x: 0,
      display: "block",
      opacity: 1,
      backgroundColor: "#fcfaf9",
      transition: {
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.3,
          delay: 0.35,
        },
        backgroundColor: {
          duration: 0.3,
          delay: 0.35,
        },
      },
    },
    exit: {
      x: "100%",
      display: "block",
      opacity: 1,
      backgroundColor: "transparent",
      transition: {
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.3,
          delay: 0.35,
        },
        backgroundColor: {
          duration: 0.3,
          delay: 0.35,
        },
      },
    },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <CardDescription
            as={motion.div}
            variants={descriptionVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            key="desc"
          >
            <CardHeader description>Description:</CardHeader>
            {description}
          </CardDescription>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardDescriptionSection;
