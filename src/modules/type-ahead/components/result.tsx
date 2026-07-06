export default function ResultSection({ data }: { data: string[] }) {
  return (
    <ul className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {data.map((item, index) => (
        <ResultItemSection key={index} item={item} />
      ))}
    </ul>
  );
}

function ResultItemSection({ item }: { item: string }) {
  return (
    <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 hover:text-blue-700 transition-colors border-b last:border-b-0 border-gray-100">
      {item}
    </li>
  );
}
