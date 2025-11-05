"use client";

import Form, { FormField } from "app/components/form";
import { z } from "zod";
import { useState } from "react";
import SuccessDialog from "./success-dialog";

const contactSchema = z.object({
  lastname_name: z
    .string()
    .min(2, {
      message: "Veuillez entrer un nom valide (au moins 2 caractères).",
    })
    .regex(/^[A-Za-zàâäéèêëîïôöùûüç\-\s']+$/, {
      message:
        "Format de nom invalide (lettres, tirets, espaces et apostrophes uniquement).",
    }),
  email: z.email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
    message: "Veuillez entrer un numéro de téléphone français valide.",
  }),
  project_type: z
    .string()
    .min(1, { message: "Veuillez sélectionner un type de projet." }),
  project_description: z
    .string()
    .refine((val) => val === "" || val.length >= 10, {
      message: "La description doit faire au moins 10 caractères ou être vide.",
    })
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du message");
    }

    await response.json();
  };

  const fields: FormField<ContactFormData>[] = [
    {
      type: "text",
      label: "Nom et prénom",
      name: "lastname_name",
      show: true,
      validation: { required: true },
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      show: true,
      validation: { required: true },
    },
    {
      type: "tel",
      label: "Téléphone",
      name: "phone",
      show: true,
      validation: { required: true },
    },
    {
      type: "select",
      label: "Type de projet",
      name: "project_type",
      show: true,
      options: [
        "Nouveau projet",
        "Évolution de projet",
        "Demande d’information",
        "Autre",
      ],
      validation: { required: true },
    },
    {
      type: "textarea",
      label: "Décrivez votre projet, en quelques mots",
      name: "project_description",
      show: true,
      validation: { required: false },
    },
  ];

  return (
    <div className="mx-auto md:w-1/2">
      <Form<ContactFormData>
        title="Un nouveau projet, une évolution de vos besoins ou tout simplement une question ?"
        description="Alors ce formulaire est fait pour vous, je vous répondrai dans les plus brefs délais !"
        fields={fields}
        onSubmit={handleSubmit}
        onSuccess={() => setIsDialogOpen(true)}
        schema={contactSchema}
      />

      <SuccessDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
