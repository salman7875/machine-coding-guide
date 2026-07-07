interface BaseField {
  id: string;
  label: string;
  required?: boolean;
}

interface TextField extends BaseField {
  type: "text" | "email";
  placeholder?: string;
  validation?: { minLength?: number; pattern?: string; message: string };
}

interface SelectField extends BaseField {
  type: "select";
  options: { label: string; value: string | number }[];
}

interface CheckboxField extends BaseField {
  type: "checkbox";
  defaultValue?: boolean;
}

export type FormField = TextField | SelectField | CheckboxField;

export type FormSchema = FormField[];

type ValueMap = {
  text: string;
  email: string;
  select: string | number;
  checkbox: boolean;
};

export type FormState = {
  [K in FormSchema[number]["id"]]: ValueMap[Extract<
    FormSchema[number],
    { id: K }
  >["type"]];
};

export type Validator = (value: any, ruleValue: any) => boolean;
