import { Button } from "@headlessui/react";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

export default function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <Button className=" bg-[var(--btn-bg-secondary)] !border-[var(--btn-secondary-border)]">
      {children}
    </Button>
  );
}
