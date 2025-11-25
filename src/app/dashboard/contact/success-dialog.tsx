"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { animate, set } from "animejs";
import SecondaryButton from "app/ui/secondary-button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  const router = useRouter();
  const dialogPanelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (backdropRef.current && dialogPanelRef.current) {
          animate(backdropRef.current, {
            opacity: [0, 1],
            duration: 200,
            easing: "ease-in-out",
          });

          animate(dialogPanelRef.current, {
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 400,
            delay: 100,
            easing: "ease-in-out",
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    animate(".contact-container", {
      opacity: [1, 0],
      duration: 500,
    });
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="success-dialog relative z-50"
    >
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/30"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          ref={dialogPanelRef}
          className="success-dialog-panel mx-auto max-w-sm rounded-2xl bg-(--card-background) p-6"
          style={{ opacity: 0, transform: "scale(0.7)" }}
        >
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
