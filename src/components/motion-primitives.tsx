"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function MarqueeRow({
  children,
  direction = "left",
  speed = 30,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}) {
  const initX = direction === "left" ? 0 : "-50%";
  const targetX = direction === "left" ? "-50%" : 0;

  return (
    <div className="flex w-full overflow-hidden mask-inline-fade">
      <motion.div
        className="flex whitespace-nowrap min-w-max py-2"
        initial={{ x: initX }}
        animate={{ x: targetX }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Render twice to ensure perfect looping continuity */}
        <div className="flex ">{children}</div>
        <div className="flex ">{children}</div>
      </motion.div>
    </div>
  );
}

export function DriftCard(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      {...props}
    />
  );
}