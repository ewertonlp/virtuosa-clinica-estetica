"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = AccordionPrimitive.Root;
export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-line", className)}
      {...props}
    />
  );
}
export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-5 py-6 text-left text-md font-medium focus-visible:outline-2 focus-visible:outline-offset-4",
          className,
        )}
        {...props}
      >
        {children}
        <Plus className="size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
export function AccordionContent({
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="accordion-content overflow-hidden"
      {...props}
    >
      <div className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-fg-muted">
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
