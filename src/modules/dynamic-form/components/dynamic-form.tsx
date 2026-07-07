import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

import type { FormState } from "../types";
import { DYNAMIC_FORM_DATA } from "../data/data";
import FormFieldWrapper from "./form-field-wrapper";
import { generateInitialValue, validateField, validateForm } from "../utils";

const DynamicFormSection = () => {
  const [formData, setFormData] = useState<FormState>(
    generateInitialValue(DYNAMIC_FORM_DATA),
  );
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: target.value }));
    }
    if (touched[name]) {
      const error = validateField(name, target.value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce<
      Partial<Record<string, boolean>>
    >((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {});

    setTouched(allTouched);

    const errors = validateForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length < 1) {
      console.log("Success!");
      setFormData(generateInitialValue(DYNAMIC_FORM_DATA));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const fieldError = validateField(name, formData[name] as any);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const formContent = DYNAMIC_FORM_DATA.map((data) => {
    const commonProps = {
      name: data.id,
      id: data.id,
      onBlur: handleBlur,
      onChange: handleChange,
      className: `border w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-teal-500 outline-none transition ${
        errors[data.id] ? "border-red-500" : "border-gray-300"
      }`,
    };

    return (
      <FormFieldWrapper
        key={data.id}
        label={data.label}
        error={errors[data.id]}
      >
        {data.type === "select" ? (
          <select
            {...commonProps}
            value={formData[data.id as keyof FormState] as string}
          >
            {data.options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...commonProps}
            type={data.type}
            // @ts-ignore
            placeholder={data?.placeholder}
            value={formData[data.id as keyof FormState] as string}
          />
        )}
      </FormFieldWrapper>
    );
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formContent}
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFormSection;
