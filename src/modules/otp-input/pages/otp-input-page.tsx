import { useRef, useState } from "react";
import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from "react";

const SIZE = 4;

const OtpInputPage = () => {
  const [query, setQuery] = useState({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
  });
  const inputRefs = useRef<any>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length > 1) return;
    setQuery((prev) => ({ ...prev, [name]: value }));

    if (value && parseInt(name) < SIZE - 1) {
      inputRefs.current[parseInt(name) + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (
      e.key === "Backspace" &&
      !query[index.toString() as keyof typeof query] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasteData = e.clipboardData.getData("text").slice(0, SIZE);
    const newQuery = { ...query };
    pasteData.split("").forEach((char, idx) => {
      if (idx < SIZE) {
        newQuery[idx.toString() as keyof typeof query] = char;
      }
    });

    setQuery(newQuery);
    const lastFilledInput = Math.min(pasteData.length, SIZE) - 1;
    inputRefs.current[
      lastFilledInput < SIZE - 1 ? lastFilledInput + 1 : lastFilledInput
    ]?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-50 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Verification Code
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Please enter the 4-digit code sent to your device.
      </p>

      <div className="flex gap-3">
        {Array.from({ length: SIZE }, (_, idx) => idx).map((item) => {
          const isFilled = query[item.toString() as keyof typeof query] !== "";

          return (
            <input
              key={item}
              ref={(el) => {
                inputRefs.current[item] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              name={item.toString()}
              value={query[item.toString() as keyof typeof query]}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, item)}
              onPaste={handlePaste}
              className={`
                w-16 h-16 text-center text-3xl font-bold border-2 rounded-xl transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-blue-100
                ${
                  isFilled
                    ? "border-blue-600 text-blue-600 bg-white"
                    : "border-gray-200 text-gray-700 bg-white hover:border-gray-300"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpInputPage;
