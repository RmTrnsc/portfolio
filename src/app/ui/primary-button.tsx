import { Button } from "@headlessui/react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function PrimaryButton({ 
  children, 
  type = 'button' 
}: PrimaryButtonProps) {
  return (
    <Button 
      type={type}
      className="text-[#fffffb] bg-[var(--btn-bg-primary)] mx-auto py-1 px-2"
    >
      {children}
    </Button>
  );
}
