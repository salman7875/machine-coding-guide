export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: "High" | "Medium" | "Critical" | "Low";
  dueDate: string;
  assignee: { name: string; avatar: string };
}
