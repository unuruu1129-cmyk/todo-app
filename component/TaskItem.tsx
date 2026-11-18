import React from "react";
import { CornerDownLeft } from "lucide-react";
export const TaskItem = () => {
  return (
    <div>
      <div className="flex flex-row justify-end gap-1.5 items-center mx-9 mt-3 mb-7">
        <CornerDownLeft strokeWidth={3} className="h-3 w-3 text-[#7A8881]" />
        <p className="text-[11px] text-[#7A8881] ">Enter to add a task</p>
      </div>
    </div>
  );
};
