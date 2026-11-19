import { Check } from "lucide-react";

export const TaskEmptyState = ({ hasTasks }: { hasTasks: Boolean }) => {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center px-6 py-10 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f6f2] text-[#6c9b82]">
        <Check className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <h2 className="text-base font-semibold text-[#304c3e]">{hasTasks ? "No tasks here" : "Your list starts here"}</h2>
      <p className="mt-2 text-sm text-[#7a8881]">{hasTasks ? "Try another filter to see your tasks" : "Add your first task above"}</p>
    </div>
  );
};
