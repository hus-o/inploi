import {
  CardDescription,
  CardHeader,
  CardDescriptionContent,
} from "./results.style";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";

interface CardDescriptionProps {
  isOpen: boolean;
  description: string;
  id: number;
}

const CardDescriptionSection: React.FC<CardDescriptionProps> = ({
  isOpen,
  description,
  id,
}) => {
  const descriptionVariants: Variants = {
    hidden: {
      x: "100%",
      display: "none",
      width: 0,
    },
    show: {
      x: 0,
      display: "block",
      width: "100%",
      transition: {
        x: {
          duration: 0.5,
        },
        width: {
          duration: 0.5,
        },
        display: {
          delay: 0.3,
        },
      },
    },
    exit: {
      x: "100%",
      display: "none",
      width: 0,
      transition: {
        x: {
          duration: 0.5,
        },
        width: {
          duration: 0.5,
        },
        display: {
          delay: 0.1,
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
            key={id}
          >
            <CardHeader description>Description:</CardHeader>
            <CardDescriptionContent>{description}</CardDescriptionContent>
          </CardDescription>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardDescriptionSection;
