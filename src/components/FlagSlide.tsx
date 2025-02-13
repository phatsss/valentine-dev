import { motion } from "framer-motion";
import React from "react";

interface Props {
  wordIndex: number;
  loveWord: any[];
}

const FlagSlide: React.FC<Props> = ({ wordIndex, loveWord }) => {
  return (
    <>
      {/* Animated Flag */}
      <motion.p
        key={wordIndex}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg text-center"
        exit={{ opacity: 0, x: 20 }}
        initial={{ opacity: 0, x: -20 }}
        style={{ fontSize: "4.5rem", lineHeight: "3rem" }}
        transition={{ duration: 0.5 }}
      >
        {loveWord[wordIndex].flag}
      </motion.p>

      {/* Animated Country Name */}
      <motion.p
        key={`country-${wordIndex}`}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-semibold text-center mt-2"
        exit={{ opacity: 0, x: 20 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {`${loveWord[wordIndex].country_code} - ${loveWord[wordIndex].country}`}
      </motion.p>
    </>
  );
};

export default FlagSlide;
