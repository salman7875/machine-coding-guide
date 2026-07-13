import type { TaskCardProps } from "../types";

export const KANBAN_TASKS: TaskCardProps[] = [
  {
    id: "task-1",
    title: "Design Landing Page",
    description:
      "Create wireframes and high-fidelity mockups for the new homepage.",
    status: "todo",
    priority: "High",
    dueDate: "2026-07-20",
    assignee: { name: "Alex Jones", avatar: "https://i.pravatar.cc/150?img=1" },
  },
  {
    id: "task-2",
    title: "Setup CI/CD Pipeline",
    description:
      "Configure GitHub Actions for automated testing and deployment.",
    status: "todo",
    priority: "Medium",
    dueDate: "2026-07-25",
    assignee: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?img=2" },
  },

  // IN PROGRESS
  {
    id: "task-3",
    title: "Auth Integration",
    description: "Implement JWT authentication and Google OAuth2.",
    status: "in-progress",
    priority: "High",
    dueDate: "2026-07-15",
    assignee: {
      name: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  },

  // TESTING / REVIEW
  {
    id: "task-4",
    title: "Payment Gateway Bug",
    description: "Fix the 402 error occurring during Stripe checkout webhooks.",
    status: "review",
    priority: "Critical",
    dueDate: "2026-07-14",
    assignee: { name: "Alex Jones", avatar: "https://i.pravatar.cc/150?img=1" },
  },

  // DONE
  {
    id: "task-5",
    title: "Database Schema Design",
    description: "Design initial PostgreSQL schema and map relations.",
    status: "done",
    priority: "Low",
    dueDate: "2026-07-05",
    assignee: { name: "Sam Smith", avatar: "https://i.pravatar.cc/150?img=2" },
  },
];

export const KANBAN_COLUMNS = [
  { id: "todo", title: "To Do", color: "#E2E8F0" },
  { id: "in-progress", title: "In Progress", color: "#BEE3F8" },
  { id: "review", title: "In Review", color: "#FEEBC8" },
  { id: "done", title: "Done", color: "#C6F6D5" },
];
