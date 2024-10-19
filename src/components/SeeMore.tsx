import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageEnhancementProps {
  readonly open: boolean;
  className?: string;
  children?: React.ReactNode;
}

const animationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const SeeMore: FC<ImageEnhancementProps> = ({ open, className, children }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default SeeMore;
