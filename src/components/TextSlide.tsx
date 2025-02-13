import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  wordIndex: number;
  loveWord: any[];
}

const TextSlide: React.FC<Props> = ({ wordIndex, loveWord }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = loveWord[wordIndex].title;
  const subText = loveWord[wordIndex].subTitle; // Add subtitle data

  const totalDuration = 5000; // Fixed cycle time (5 sec)

  // Split cycle: 50% typing, 30% pausing, 20% deleting
  const typingPhaseTime = totalDuration * 0.5; // 2.5s
  const pausePhaseTime = totalDuration * 0.3; // 1.5s
  const deletingPhaseTime = totalDuration * 0.2; // 1s

  // Adjust speed so typing + deleting fits exactly in allotted time
  const typingSpeed = typingPhaseTime / fullText.length;
  const deletingSpeed = deletingPhaseTime / fullText.length;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing mode
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pausePhaseTime);
      }
    } else {
      // Deleting mode
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText.length, typingSpeed, deletingSpeed]);

  useEffect(() => {
    // Reset when wordIndex changes
    setIsDeleting(false);
    setCharIndex(0);
  }, [wordIndex]);

  return (
    <>
      {/* Typing Effect Title */}
      <motion.h1
        key={`title-${wordIndex}`}
        animate={{ opacity: 1, y: 0 }}
        className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mt-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {fullText.slice(0, charIndex)}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          className="text-red-500"
          transition={{ duration: 0.7, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.h1>

      {/* Subtitle with Fade-in Animation */}
      <motion.p
        key={`subTitle-${wordIndex}`}
        animate={{ opacity: 1, y: 0 }}
        className="xl:text-2xl md:text-xl text-gray-300 text-center italic"
        exit={{ opacity: 0, y: 5 }}
        initial={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.5, delay: 0.8 }} // Delayed appearance
      >
        ({subText})
      </motion.p>
    </>
  );
};

export default TextSlide;
