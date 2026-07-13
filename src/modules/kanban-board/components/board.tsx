import { useState } from "react";
import TaskCard from "./task-card";
import { KANBAN_COLUMNS, KANBAN_TASKS } from "../data/data";
import type { TaskCardProps } from "../types";

const KanbanBoardSection = () => {
  const [tasks, setTasks] = useState<TaskCardProps[]>(KANBAN_TASKS);
  const [activeTask, setActiveTask] = useState<TaskCardProps | null>(null);
  const [activeOverColumn, setActiveOverColumn] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent) => {
    const card = (e.target as HTMLElement).closest("li");
    if (!card) return;

    const cardId = card.id;
    const pickedTask = tasks.find((task) => task.id === cardId);
    if (pickedTask) {
      setActiveTask(pickedTask);
    }

    e.dataTransfer.setData("text/plain", cardId);
    e.dataTransfer.effectAllowed = "move";

    setTimeout(() => {
      card.style.opacity = "0.4";
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const card = (e.target as HTMLElement).closest("li");
    if (card) {
      card.style.opacity = "1";
    }
    setActiveTask(null);
    setActiveOverColumn(null);
  };

  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (activeOverColumn !== columnId) {
      setActiveOverColumn(columnId);
    }
  };

  const handleDragLeave = () => {
    setActiveOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, columnStatus: string) => {
    e.preventDefault();
    setActiveOverColumn(null);

    if (!activeTask) return;

    const targetCard = (e.target as HTMLElement).closest("li");
    const targetTaskId = targetCard ? targetCard.id : null;

    setTasks((prevTasks) => {
      const cleanTasks = prevTasks.filter((task) => task.id !== activeTask.id);

      const updatedActiveTask = { ...activeTask, status: columnStatus };

      if (targetTaskId) {
        const targetIndex = cleanTasks.findIndex(
          (task) => task.id === targetTaskId,
        );
        if (targetIndex !== -1) {
          const reorderedTasks = [...cleanTasks];
          reorderedTasks.splice(targetIndex, 0, updatedActiveTask);
          return reorderedTasks;
        }
      }

      return [...cleanTasks, updatedActiveTask];
    });

    setActiveTask(null);
  };

  const handleCreateTask = (columnId: string) => {
    const title = prompt("Enter a title for your new task:");
    if (!title || !title.trim()) return;

    const newTask: TaskCardProps = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      description: "No description provided yet.",
      status: columnId,
      priority: "Medium",
      dueDate: new Date().toISOString().split("T")[0],
      assignee: { name: "Badshah", avatar: "ihwehjiewhj" },
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <main className="max-w-7xl min-h-screen mx-auto py-12 px-4 bg-slate-50/50">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Development Board
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track your team's progress
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {KANBAN_COLUMNS.map((column) => {
          const columnTasks = tasks.filter((task) => task.status === column.id);
          const isHovered = activeOverColumn === column.id;

          return (
            <div
              key={column.id}
              onDragOver={(e) => handleDragOver(e, column.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, column.id)}
              className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col gap-4 min-h-137.5 ${
                isHovered
                  ? "bg-slate-200/80 border-dashed border-slate-400 ring-2 ring-slate-300/30 shadow-inner"
                  : "bg-slate-100/70 border-slate-200/60 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: column.color }}
                  />
                  <h2 className="text-sm font-semibold text-slate-700">
                    {column.title}
                  </h2>
                </div>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                  {columnTasks.length}
                </span>
              </div>

              <ul
                className="flex flex-col gap-3 dynamic-task-list flex-1"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} data={task} />
                ))}

                {columnTasks.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-slate-200 rounded-xl text-center my-auto">
                    <p className="text-xs text-slate-400 font-medium">
                      No tasks here
                    </p>
                  </div>
                )}
              </ul>

              {/* Inline Column Add Button */}
              <button
                onClick={() => handleCreateTask(column.id)}
                className="w-full py-2 px-3 text-xs font-medium text-slate-500 hover:text-slate-800 bg-white/40 hover:bg-white border border-slate-200/50 hover:border-slate-300 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <span className="text-sm font-bold">+</span> Add Task
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default KanbanBoardSection;
