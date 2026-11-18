import { TaskHeader, TaskList, TaskForm, TaskFilters } from "@/component";
import { TaskItem } from "@/component/TaskItem";
import Image from "next/image";
import { Task } from "@/types";
export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-20 bg-[#EAF0EB]">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/80 bg-white ">
        <TaskHeader />
        <TaskForm />
        <TaskItem />
        <TaskFilters tasks={tasks} filter={filter} onFilter={handleFilter} />
      </div>
    </main>
  );
}
