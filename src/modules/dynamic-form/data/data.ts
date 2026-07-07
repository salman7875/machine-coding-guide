import type { FormSchema, Validator } from "../types";

export const DYNAMIC_FORM_DATA: FormSchema = [
  {
    id: "full_name",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
    validation: {
      minLength: 3,
      message: "Name must be at least 3 characters long",
    },
  },
  {
    id: "email",
    type: "email",
    label: "Email Address",
    required: true,
    validation: {
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      message: "Invalid email format",
    },
  },
  {
    id: "role",
    type: "select",
    label: "Job Role",
    options: [
      { label: "Developer", value: "dev" },
      { label: "Designer", value: "des" },
      { label: "Manager", value: "mgr" },
    ],
    required: true,
  },
  {
    id: "newsletter",
    type: "checkbox",
    label: "Subscribe to newsletter",
    defaultValue: false,
  },
];

export const validatorRegistry: Record<string, Validator> = {
  required: (val) => val !== "" && val !== false && val !== null,
  minLength: (val, min) => String(val).length >= min,
  pattern: (val, regex) => new RegExp(regex).test(String(val)),
};
