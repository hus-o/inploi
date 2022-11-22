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
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.3,
          delay: 0.2,
        },
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.2,
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
