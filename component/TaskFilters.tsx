import React from "react";
import { MouseEvent } from "react";
import type { Task } from "@/types";
type TaskFilterProps = {
  tasks: Task[];
  filter: string;
  onFilter: (filterValue: string) => void;
};
export const TaskFilters = ({ tasks, filter, onFilter }: TaskFilterProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onFilter(event.currentTarget.id);
  };
  return (
    <div className="flex justify-between text-sm mx-8 text-[#7B8680] py-[13.5px] ">
      <div className="flex flex-row justify-between gap-5 ">
        {["All", "Active", "Completed"].map((item) => (
          <button onClick={handleClick} id={item} className={`hover:text-[#236b53] border-b-2 ${filter === item ? " border-b-green-900" : "border-b-transparent"}`} key={item}>
            {item}
          </button>
        ))}
      </div>
      <span className="text-[#65766C] text-[11px] flex justify-center items-center bg-[#F0F4F1] px-1 py-[2.5px] rounded-md">{tasks.length}</span>
    </div>
  );
};
