import SearchSection from "../components/search";

const TypeAheadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Find what you need
        </h1>
        <p className="text-gray-600">Explore our documentation and resources</p>
      </div>

      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <SearchSection />
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Press{" "}
        <kbd className="bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-mono">
          ⌘K
        </kbd>{" "}
        to search anywhere
      </p>
    </div>
  );
};

export default TypeAheadPage;
