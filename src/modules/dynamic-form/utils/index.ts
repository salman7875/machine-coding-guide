import { DYNAMIC_FORM_DATA, validatorRegistry } from "../data/data";
import type { FormSchema, FormState } from "../types";

export const generateInitialValue = (schema: FormSchema): FormState => {
  return schema.reduce((acc, field) => {
    if (field.type === "checkbox") {
      acc[field.id as keyof FormState] = field.defaultValue ?? false;
    } else {
      acc[field.id as keyof FormState] = "";
    }
    return acc;
  }, {} as FormState);
};

export const validateField = (key: string, value: string | boolean): string => {
  const field = DYNAMIC_FORM_DATA.find((f) => f.id === key);
  if (!field) return "";

  if (field.required && !validatorRegistry.required(value, true)) {
    return `${field.label} is required!`;
  }

  if ("validation" in field && field.validation) {
    for (const [ruleName, ruleValue] of Object.entries(field.validation)) {
      if (validatorRegistry[ruleName]) {
        const isValid = validatorRegistry[ruleName](value, ruleValue);
        if (!isValid) {
          return field.validation.message;
        }
      }
    }
  }
  return "";
};

export const validateForm = (formData: FormState) => {
  let errors: Record<string, string> = {};
  Object.entries(formData).forEach(([key, value]) => {
    const error = validateField(key, value as any);
    if (error) {
      errors[key] = error;
    }
  });
  return errors;
};
