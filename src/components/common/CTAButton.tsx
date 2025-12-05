"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  gradient?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  gradient = false,
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const variants = {
    primary: gradient
      ? "bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg hover:shadow-xl focus:ring-primary-500"
      : "bg-primary text-white hover:bg-primary-600 shadow-lg hover:shadow-xl focus:ring-primary-500",
    secondary: gradient
      ? "bg-gradient-to-r from-secondary to-secondary-600 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500"
      : "bg-secondary text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl focus:ring-secondary-500",
  };

  const buttonClasses = cn(baseStyles, sizes[size], variants[variant], className);

  const MotionComponent = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <MotionComponent
      {...props}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
