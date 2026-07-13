import type { TaskCardProps } from "../types";

const getPriorityClass = (priority: "High" | "Medium" | "Critical" | "Low") => {
  switch (priority?.toLowerCase()) {
    case "Critical":
      return "bg-red-100 text-red-700 font-semibold";
    case "High":
      return "bg-orange-100 text-orange-700 font-semibold";
    case "Medium":
      return "bg-yellow-100 text-yellow-700 font-semibold";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function TaskCard({ data }: { data: TaskCardProps }) {
  return (
    <li
      draggable
      id={data.id}
      className="list-none bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing flex flex-col gap-3 select-none"
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider ${getPriorityClass(data.priority)}`}
        >
          {data.priority}
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {data.dueDate}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-800 line-clamp-1 mb-1">
          {data.title}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {data.description}
        </p>
      </div>

      {data.assignee && (
        <div className="flex items-center justify-end border-t border-slate-100 pt-2 mt-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-medium">
              {data.assignee.name}
            </span>
            <img
              src={data.assignee.avatar}
              alt={data.assignee.name}
              className="w-6 h-6 rounded-full border border-slate-200 object-cover"
            />
          </div>
        </div>
      )}
    </li>
  );
}
