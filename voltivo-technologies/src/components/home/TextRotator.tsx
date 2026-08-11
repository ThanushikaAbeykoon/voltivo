"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextRotatorProps {
  words: string[];
}

export default function TextRotator({ words }: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block overflow-hidden pb-2 -mb-2 align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "80%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-80%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block text-[#00c2ff]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
