import { TaskEmptyState } from "./TaskEmptyState";
import { Trash } from "lucide-react";
import { Task } from "@/types";
import { Check } from "lucide-react";

type TAskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskList = ({ tasks, hasTasks, onToggle, onDelete }: TAskListProps) => {
  if (!tasks.length) return <TaskEmptyState hasTasks={hasTasks} />;
  const handleToggle = (id: string) => () => {
    onToggle(id);
  };

  return (
    <div className="px-5 py-2">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="px-3 flex h-15 items-center justify-between hover:bg-green-50 rounded-2xl">
            <label className="flex gap-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={handleToggle(task.id)}
                  className={`size-4 cursor-pointer appearance-none border p-2 border-gray-400 rounded-full ${task.completed && "bg-green-700"}`}
                />
                {task.completed && <Check size={14} strokeWidth={2} className="absolute top-0.5 left-1/2 -translate-x-1/2 text-white" />}
              </div>
              <div className={`text-[#30483c] font-medium text-sm ${task.completed ? "line-through text-grey-400" : ""}`}>{task.title}</div>
            </label>
            <button onClick={() => onDelete(task.id)} className="cursor-pointer flex items-center justify-center rounded-xl p-3 hover:bg-red-50 hover:text-red-500">
              <Trash className="size-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
