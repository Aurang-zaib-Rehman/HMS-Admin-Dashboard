import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal({
  children,
  from = "left",
  delay = 0,
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -60 : from === "right" ? 60 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
