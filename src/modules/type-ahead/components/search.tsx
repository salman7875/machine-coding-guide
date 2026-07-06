import { useEffect, useState, type ChangeEvent } from "react";
import ResultSection from "./result";
import SearchIcon from "./search-icon";

const data = ["React Basics", "Advanced Hooks", "State Management"];

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(data);
  const [cache, setCache] = useState<Partial<Record<string, string[]>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (query.length > 0) {
        if (cache[query]) {
          setResult(cache[query]);
        } else {
          const filterResult = data.filter((r) => r.includes(query));
          setResult(filterResult);
          setCache((prev) => ({ ...prev, [query]: filterResult }));
        }
      } else {
        setResult(data);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative">
        <input
          type="text"
          id="search"
          value={query}
          name="search"
          onChange={handleChange}
          placeholder="Search documentation..."
          className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        />
        <SearchIcon />
      </div>

      <ResultSection data={result} />
    </div>
  );
};

export default SearchSection;
