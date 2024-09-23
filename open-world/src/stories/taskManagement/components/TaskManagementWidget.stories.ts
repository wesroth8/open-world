import type { Meta, StoryObj } from '@storybook/react';
 
import { TaskManagementWidget } from './TaskManagementWidget';
import { WidgetType, Priority } from '../types/enums';

import { woodTheme } from '../themes/wood';
import { spaceTheme } from '../themes/space';
 
const meta: Meta<typeof TaskManagementWidget> = {
  component: TaskManagementWidget,
};
 
export default meta;
type Story = StoryObj<typeof TaskManagementWidget>;
 
export const Primary: Story = {
  args: {
    widgetType: WidgetType.List,
    tasks: [
        {title: "Task 1", description: "This is a long and winding description for Task 1", completed: false, tags: [{title: "health", style: woodTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.High},
        {title: "Task 2", description: "This is a long and winding description for Task 2", completed: false, tags: [{title: "work", style: woodTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.Medium}
    ],
    theme: woodTheme,
  },
};

export const Space: Story = {
  args: {
    widgetType: WidgetType.List,
    tasks: [
        {title: "Task 1", description: "This is a long and winding description for Task 1", completed: false, tags: [{title: "health", style: spaceTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.High},
        {title: "Task 2", description: "This is a long and winding description for Task 2", completed: false, tags: [{title: "work", style: spaceTheme.taskPriorityTag}], completedDate: new Date(), dueDate: new Date(), priority: Priority.Medium}
    ],
    theme: spaceTheme,
  },
};