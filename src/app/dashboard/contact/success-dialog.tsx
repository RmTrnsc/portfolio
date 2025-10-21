"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import SecondaryButton from "app/ui/secondary-button";
import { useRouter } from "next/navigation";

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.push("/dashboard");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-sm rounded-2xl bg-[var(--card-background)] p-6">
          <DialogTitle className="text-3xl font-header mb-2">
            Message envoyé !
          </DialogTitle>
          <Description className="text-justify">
            Votre message a été envoyé avec succès.
            <br />
            Je vous répondrai dans les plus brefs délais.
          </Description>

          <SecondaryButton
            onClick={handleClose}
            className="float-end mt-4 px-4 py-2"
          >
            Fermer
          </SecondaryButton>
        </DialogPanel>
      </div>
    </Dialog>
  );
}