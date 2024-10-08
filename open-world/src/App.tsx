import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {create, useStore, } from 'zustand';
import { Task } from "./types/Task";
import { TaskManagementWidget } from "./stories/taskManagement/components/TaskManagementWidget";
import { WidgetType, Priority } from "./stories/taskManagement/types/enums";
import { woodTheme } from "./stories/taskManagement/themes/wood";

interface taskManagementState {
  tasks: Task[],
  addTask: (e: any) => void
}

const taskStore = create<taskManagementState>()((set) => ({
  tasks: [
    {title: "Task 1", description: "Test description for Task 1", completed: false, tags: [{title: "health", style: woodTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.High},
    {title: "Task 2", description: "This is a long and winding description for Task 2", completed: false, tags: [{title: "work", style: woodTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.Medium}
  ],
  addTask: (e) => {
    const newTask: Task = {title: "New Task", description: "Enter description here", completed: false, tags: [], completedDate: new Date(), dueDate: new Date(), priority: Priority.Low}
    set((state) => ({
      tasks: [...state.tasks, newTask]
    }))
  }
}))

function App() {
  const tasks = taskStore((state) => state.tasks);
  const addTask = taskStore((state) => state.addTask);

  return (
    <div>
      <TaskManagementWidget 
      widgetType={WidgetType.List} 
      theme={woodTheme} 
      tasks={tasks}/>
      <button onClick={addTask}>Add New Task</button>
    </div>
  );
}

export default App;
