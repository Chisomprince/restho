import { motion } from "framer-motion";

export default function SpinningAnimation({ children }) {
  return (
    <>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity, // Infinite rotation
          ease: "linear",
        }}
        style={{ height: "fit-content", width: "fit-content" }}
      >
        {children}
      </motion.div>
    </>
  );
}
