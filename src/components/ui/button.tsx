import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-action text-action-text hover:bg-action-hover",
        outline: "border border-current bg-transparent hover:bg-olive/5",
        ghost: "hover:bg-olive/5",
        light: "bg-action-light text-action-text hover:bg-inverse",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "min-h-10 px-4 py-2 text-xs",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
