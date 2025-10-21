"use client";

import { Button } from "@headlessui/react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryButton({
  children,
  type = "button",
  disabled = false,
  onClick = () => {},
  className = "",
}: SecondaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`text-[var(--foreground)] bg-[var(--btn-bg-secondary)] border-[var(--btn-secondary-border)] mx-auto py-1 px-2 ${className}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
