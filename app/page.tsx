import { TaskHeader, TaskList, TaskForm, TaskFilters } from "@/component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-20 bg-[#EAF0EB]">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/80 bg-white ">
        <TaskHeader />
        <TaskForm />
      </div>
    </main>
  );
}
