"use client";

import { Button } from "@headlessui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  type = "button",
  disabled = false,
  onClick = () => {},
  className = "",
}: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`text-[#fffffb] bg-[var(--btn-bg-primary)] mx-auto py-1 px-2 ${className}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
