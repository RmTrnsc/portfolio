import { Button } from "@headlessui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`
        ${className}
      `}
    >
      {children}
    </Button>
  );
}
