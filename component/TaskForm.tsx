import React from "react";
import { Plus } from "lucide-react";
export const TaskForm = () => {
  return (
    <form className="mx-6 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-2 sm:mx-8">
      <label htmlFor="new-task" className="sr-only">
        Task name
      </label>
      <div className="flex items-center gap-2">
        <input
          id="new-task"
          required
          maxLength={160}
          placeholder="What needs to get done?"
          className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3.5 text-sm text-[#213d35] sm:px-4 sm:text-base"
        />
        <button type="submit" className="cursor-pointer disabled:cursor-not-allowed flex min-h-12 shrink-0 items-center gap-2 rounded-xl text-sm font-semibold bg-[#236B53] px-[21.5]">
          <Plus className="h-4 w-4"/>
          Add<span className="hidden sm:inline">task</span>
        </button>
      </div>
    </form>
  );
};
