import { StyledLottie } from "./not-found.style";
import lottieJson from "../../json/not-found2.json";
import { motion, Variants } from "framer-motion";

const NotFound = () => {
  const lottieVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
        },
      },
    },
  };
  return (
    <motion.div variants={lottieVariants} initial="hidden" animate="show">
      <StyledLottie loop animationData={lottieJson} play />
    </motion.div>
  );
};

export default NotFound;
