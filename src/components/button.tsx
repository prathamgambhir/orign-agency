"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "dark" | "outline";
  className?: string;
};

const MotionLink = motion(Link);

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <MotionLink
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-xs font-black uppercase transition duration-300 active:scale-95",
        variant === "primary" &&
          "bg-lime-300 text-[#07111f] shadow-[0_12px_34px_rgba(185,255,23,0.28)] hover:-translate-y-0.5 hover:bg-white",
        variant === "light" && "bg-white text-[#07111f] hover:-translate-y-0.5 hover:bg-lime-200",
        variant === "dark" && "bg-[#07111f] text-white hover:bg-[#b00046]",
        variant === "outline" &&
          "border border-[#07111f]/15 bg-white/70 text-[#07111f] hover:-translate-y-0.5 hover:bg-[#07111f] hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </MotionLink>
  );
}
