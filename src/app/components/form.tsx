"use client";

import {
  Controller,
  FieldValues,
  Path,
  Resolver,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import PrimaryButton from "app/ui/primary-button";
import z from "zod";

export interface FormField<T> {
  type: "text" | "email" | "tel" | "select" | "textarea";
  label: string;
  name: Path<T>;
  options?: string[];
  show?: boolean;
  validation: {
    required?: boolean;
    errorMessage?: string;
  };
}

interface FormProps<T extends FieldValues> {
  title: string;
  description: string;
  fields: FormField<T>[];
  onSubmit: (data: T) => void;
  schema: z.ZodType<T, any, any>;
  submitText?: string;
}

export default function Form<T extends FieldValues>({
  title,
  description,
  fields,
  onSubmit,
  schema,
  submitText = "Envoyer",
}: FormProps<T>) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema) as Resolver<T>,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="grid gap-4">
        <Legend className="grid gap-2">
          <h1 className="indent-4">{title}</h1>
          <p>{description}</p>
        </Legend>
        {fields
          .filter((field) => field.show)
          .map((field, index) => (
            <Field key={index} className="grid gap-3">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "select" ? (
                <Controller
                  name={field.name}
                  control={control}
                  defaultValue={"" as any}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      name={field.name}
                      required={field.validation.required}
                      onChange={onChange}
                      value={value || ""}
                      className="border p-2"
                    >
                      <option value="">Sélectionnez un choix</option>
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  )}
                ></Controller>
              ) : field.type === "textarea" ? (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      name={field.name}
                      required={field.validation.required}
                      onChange={onChange}
                      value={value || ""}
                      className="border p-2"
                    />
                  )}
                />
              ) : (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type={field.type}
                      name={field.name}
                      required={field.validation.required}
                      onChange={onChange}
                      value={value || ""}
                      className="border p-2"
                    />
                  )}
                />
              )}
              {errors[field.name] && (
                <p className="text-red-600">
                  {errors[field.name]?.message?.toString() ??
                    "Ce champ est invalide."}
                </p>
              )}
            </Field>
          ))}
        <PrimaryButton type="submit">
          <EnvelopeIcon className="size-5 text-white" />
          {submitText}
        </PrimaryButton>
      </Fieldset>
    </form>
  );
}
