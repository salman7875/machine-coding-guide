import { useState } from "react";
import { ACCORDIAN_DATA } from "../data/data";
import AccordianItem from "./accordian-item";

const AccordianList = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-3">
          {ACCORDIAN_DATA.map((data) => (
            <AccordianItem
              key={data.id}
              data={data}
              isOpen={openId === data.id}
              onToggle={() => setOpenId(openId === data.id ? null : data.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccordianList;
