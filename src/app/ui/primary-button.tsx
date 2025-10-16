import { Button } from "@headlessui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <Button className="text-[#fffffb] bg-[var(--btn-bg-primary)] mx-auto py-1 px-2">
      {children}
    </Button>
  );
}
