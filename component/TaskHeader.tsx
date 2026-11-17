import React from "react";
import { ListTodo } from "lucide-react";

export const TaskHeader = () => {
  return (
    <div className="ml-8 my-8">
      <div className="flex items-center gap-3">
        <ListTodo className=" text-[#23735A] size-11 p-2.5 rounded-4xl bg-[#E5F2ED] " />
        <div className="text-2xl font-semibold text-[#213D35]"> My tasks.</div>
      </div>
    </div>
  );
};
