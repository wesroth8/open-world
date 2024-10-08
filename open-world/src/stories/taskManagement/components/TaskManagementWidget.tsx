import React from "react";
import { useState } from "react";
import { WidgetType } from "../types/enums";
import { Task } from "../../../types/Task";
import { TaskManagementListItem } from "./TaskManagementWidgetListItem";
import '../styles/task-management-widget.css';
import { TaskManagementTheme } from "../../../types/TaskManagementTheme";

export interface TaskManagementWidgetProps {
    widgetType: WidgetType,
    tasks: Task[],
    theme: TaskManagementTheme
}

export const TaskManagementWidget = ({
    theme,
    tasks,
    widgetType,
    ...props
}: TaskManagementWidgetProps) => {

    const taskList = tasks.map((task) => {
        return (
            <TaskManagementListItem theme={theme} task={task}/>
        )
    });

    const taskManagementWidgetHeader = () => {
        return (
            <div className="task-management-header" style={theme.taskManagementHeader}>
                <h1 className="task-management-title" style={theme.taskManagementHeaderTitle}>Task Management</h1>
            </div>
        )
    }

    return (
        <div className="task-management-widget" style={theme.taskManagementWidget}>
            {taskManagementWidgetHeader()}
            <li className="task-management-tasks" style={theme.taskManagementTasks}>
                {taskList}
            </li>
        </div>
    )
}