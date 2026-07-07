const FormFieldWrapper = ({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) => (
  <div className="flex flex-col space-y-1.5 w-full">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <div className="w-full">{children}</div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default FormFieldWrapper;
