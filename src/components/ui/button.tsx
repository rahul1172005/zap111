import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",

        // Glass-chromatic red CTA (no outer gradient)
        hero:
          "relative overflow-hidden bg-[#b3101c]/30 text-red-200 font-semibold backdrop-blur-xl border border-[#b3101c]/40 rounded-md shadow-[0_0_10px_rgba(179,16,28,0.18)] hover:bg-[#b3101c]/45 hover:text-white transition-all before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none",

        // Base glass button
        glass:
          "glass-panel text-foreground glass-hover border-accent/30",

        // NEW: Gradient-border variant (inner styling is lightweight, outer border is from HoverBorderGradient)
        gradient:
          "rounded-full px-6 py-3 text-sm md:text-base font-semibold",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Special rendering for gradient variant
    if (variant === "gradient") {
      const innerClasses = cn(
        buttonVariants({ variant: "gradient", size }),
        className
      );

      return (
        <HoverBorderGradient
          as={Comp as any}
          ref={ref}
          className={innerClasses}
          {...props}
        >
          {children}
        </HoverBorderGradient>
      );
    }

    // All other variants behave as normal shadcn buttons
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
