import { TagType } from "./Tag";
import { Priority } from "../stories/components/taskManagement/enums";

export type Task = {
    title: string,
    description?: string,
    completed: boolean,
    completedDate: Date,
    tags: TagType[],
    dueDate: Date,
    priority: Priority,
}