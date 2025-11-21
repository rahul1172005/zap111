"use client";

import * as React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  containerClassName?: string;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(({ children, className, containerClassName, ...props }, ref) => {
  return (
    <HoverBorderGradient
      as="button"
      containerClassName={cn("rounded-full", containerClassName)}
      className={cn(
        // match shadcn `size="lg"`: h-11 px-8
        "h-10 px-8 text-sm md:text-base font-semibold",
        "flex items-center justify-center gap-2",
        "bg-[#13070a]/90 text-red-100",
        "backdrop-blur-2xl border border-[#ff4b5c]/40",
        "hover:bg-[#1a090c] hover:text-white",
        "shadow-[0_0_30px_rgba(255,75,92,0.25)]",
        "transition-all duration-300",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </HoverBorderGradient>
  );
});

GradientButton.displayName = "GradientButton";
