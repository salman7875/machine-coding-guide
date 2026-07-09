const AccordianItem = ({ data, isOpen, onToggle }: any) => {
  return (
    <li
      className={`border rounded-lg transition-all duration-300 ${isOpen ? "border-blue-200 bg-blue-50/30" : "border-gray-200"}`}
    >
      <button
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold ${isOpen ? "text-blue-900" : "text-gray-700"}`}
        >
          {data.heading}
        </span>
        <span className="flex items-center text-sm font-medium text-blue-600">
          {isOpen ? "Hide" : "Show"}
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 italic bg-gray-50 mx-2 rounded-md p-3 border border-gray-100">
          {data.content}
        </div>
      )}
    </li>
  );
};

export default AccordianItem;
