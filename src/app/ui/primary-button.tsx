import { Button } from "@headlessui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <Button className="text-white bg-[var(--btn-bg-primary)]">
      {children}
    </Button>
  );
}
