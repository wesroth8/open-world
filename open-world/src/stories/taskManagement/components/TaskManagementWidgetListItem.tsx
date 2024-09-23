import React from "react";
import { Task } from "../../../types/Task";
import { Tag } from "../../components/tag/Tag";
import { Checkbox } from "../../components/checkbox/Checkbox";
import "../styles/task-management-widget-listitem.css";
import { Priority } from "../types/enums";
import { useState } from "react";
import { TaskManagementTheme } from "../../../types/TaskManagementTheme";

export interface TaskManagementListItemProps {
    task: Task,
    theme: TaskManagementTheme,
}

export const TaskManagementListItem = ({
    task,
    theme,
    ...props
}: TaskManagementListItemProps) => {

    const [taskTitle, setTaskTitle] = useState(task.title);
    const [editableTitle, setEditableTitle] = useState(false);
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [editableDescription, setEditableDescription] = useState(false);

    // Task Title
    function handleTaskTitleClick() {
        setEditableTitle(!editableTitle);
    }

    function handleTaskTitleInputChange(e: any) {
        e.preventDefault();
        setTaskTitle(e.target.value);
    }

    function handleTaskTitleKeyUp(e: any) {
        if (e.key === "Enter") {
            handleTaskTitleClick();
        }
    }

    const taskTitleElement = () => {
        if (editableTitle) {
            return (
                <input placeholder={taskTitle} type="text" className="task-title-input" autoFocus id={taskTitle} onClick={handleTaskTitleClick} onChange={handleTaskTitleInputChange} onKeyUp={handleTaskTitleKeyUp}/>
            )
        } else {
            return (
                <p className="task-title" style={theme.taskTitle} onClick={handleTaskTitleClick}>{taskTitle}</p>
            )
        }
    }

    // Task Description

    function handleTaskDescriptionClick() {
        setEditableDescription(!editableDescription);
    }

    function handleTaskDescriptionOnChange(e: any) {
        e.preventDefault();
        setTaskDescription(e.target.value);
    }

    function handleTaskDescriptionOnKeyUp(e: any) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleTaskDescriptionClick();
        }
    }

    const taskDescriptionElement = () => {
        if (editableDescription) {
            return (
                <input 
                    placeholder={taskDescription} 
                    type="text" 
                    className="task-description-input" 
                    autoFocus id={taskDescription} 
                    onClick={handleTaskDescriptionClick} 
                    onChange={handleTaskDescriptionOnChange} 
                    onKeyUp={handleTaskDescriptionOnKeyUp}
                />
            )
        } else {
            return (
                <p className="task-description" style={theme.taskDescription} onClick={handleTaskDescriptionClick}>{taskDescription}</p>
            )
        }
    }


    function setTaskCompletedStatus() {
        task.completed = !task.completed;
    }

    const tags = task.tags.map((tag) => {
        return <Tag tag={tag}/>
    });

    const priorityTag = () => {
        const tagTitle = () => {
            let title: string = "";
            if (task.priority == Priority.High) {
                title += "high"
            } else if (task.priority == Priority.Medium) {
                title += "medium"
            } else {
                title += "low"
            } return title
        };
        return <Tag tag={{title: tagTitle(), style: theme.taskPriorityTag}}/>
    };

    return (
        <li className="task-management-list-item" style={theme.taskManagementListItem}>
            <div className="task-top-section" style={theme.taskTopSection}>
                <div className="task-completed-section" style={theme.taskCompletedSection}>
                    <Checkbox checked={task.completed} onClick={setTaskCompletedStatus} label={""}/>
                </div>
                <div className="task-details-section" style={theme.taskDetailsSection}>
                    {taskTitleElement()}
                    {taskDescriptionElement()}
                </div>
            </div>
            <div className="task-bottom-section" style={theme.taskBottomSection}>
                <div className="task-due-date-section" style={theme.taskDueDateSection}>
                    <p className="task-due-date">Due {task.dueDate.toLocaleDateString()}</p>
                </div>
                <div className="task-tags-section" style={theme.taskTagsSection}>
                    {tags}
                </div>
                <div className="task-priority-section" style={theme.taskPrioritySection}>
                    {priorityTag()}
                </div>
            </div>
        </li>
    )
}