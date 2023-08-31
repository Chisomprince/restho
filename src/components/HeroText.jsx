import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Text 1", "Text 2", "Text 3"]; // Array of texts to cycle through

const VibratingText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % texts.length // Cycle through texts
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentText = texts[currentTextIndex];

  return (
    <motion.div
      key={currentText} // Ensure a re-render when text changes
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: [-10, 0, -5, 0], // Vibration effect
        opacity: 0, // Animate opacity to fade out
      }}
      exit={{
        y: -20, // Move text up on exit
        opacity: 0, // Fade out
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        // You can trigger the animation to come back in after the exit animation completes
        // This can be handled with state or other logic based on your app structure
      }}
    >
      <p className="text-white text-2xl"> {currentText}</p>
    </motion.div>
  );
};

export default VibratingText;
