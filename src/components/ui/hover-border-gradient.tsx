"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverBorderGradientProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const HoverBorderGradient = React.forwardRef<
  HTMLButtonElement,
  HoverBorderGradientProps
>(({ as: Comp = "button", children, className, containerClassName, ...props }, ref) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[1px] overflow-hidden",
        "bg-[radial-gradient(circle_at_0%_0%,#ff3355,transparent_40%),radial-gradient(circle_at_100%_100%,#ffb199,transparent_40%)]",
        "transition-transform duration-3000 hover:scale-[1.02]",
        containerClassName
      )}
    >
      {/* Inner actual button */}
      <Comp
        ref={ref}
        className={cn(
          "relative z-10 w-full h-full rounded-full",
          "flex items-center justify-center gap-2",
          "px-6 py-3 text-sm md:text-base font-semibold",
          "bg-[#13070a]/90 text-red-100",
          "backdrop-blur-2xl border border-[#ff4b5c]/40",
          "shadow-[0_0_30px_rgba(255,75,92,0.25)]",
          "transition-colors duration-300 hover:bg-[#1a090c] hover:text-white",
          className
        )}
        {...props}
      >
        {children}
      </Comp>

      {/* Soft glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.12),transparent_55%)] mix-blend-screen opacity-60" />
    </div>
  );
});

HoverBorderGradient.displayName = "HoverBorderGradient";
