"use client";
import { Task } from "@/types";
import { useState } from "react";
import { TaskHeader, TaskList, TaskForm, TaskFilters, TaskItem } from "@/component";

const Homepage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };
  const handleToggle = (id: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };
  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const visibleTasks = tasks.filter((task) => filter === "All" || (filter === "Active" ? ~task.completed : task.completed));

  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-20 bg-[#EAF0EB]">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/80 bg-white ">
        <TaskHeader />
        <TaskForm onCreateTask={createTask} />
        <TaskItem />
        <TaskFilters tasks={visibleTasks} filter={filter} onFilter={handleFilter} />
        <TaskList />
      </div>
    </main>
  );
};

export default Homepage;
