import { TaskManagementTheme } from "../../../types/TaskManagementTheme";

const chestnut = '#432818';
const birch = '#FFE6A7';
const redwood = "#6F1D1B";
const oak = "#BB9457";
const elm = "#99582A";



export const woodTheme: TaskManagementTheme = {
    taskManagementWidget: {
        fontFamily: "Georgia"
    },
    taskManagementHeader: {
        backgroundColor: chestnut,
    },
    taskManagementHeaderTitle: {
        color: 'white'
    },
    taskManagementListItem: {
        backgroundColor: birch,
        marginBottom: "1em"
    },
    taskTopSection: {
        borderColor: redwood,
        borderWidth: "2px"
    },
    taskBottomSection: {
        borderColor: redwood,
        borderWidth: "2px"
    }, 
    taskCompletedSection: {
        borderColor: redwood,
        borderWidth: "2px"
    },
    taskDetailsSection: {

    },
    taskPrioritySection: {
        borderColor: redwood,
        borderWidth: "2px"
    },
    taskDueDateSection: {
        borderColor: redwood,
        borderWidth: "2px",
        color: chestnut,
    },
    taskTagsSection: {

    },
    taskPriorityTag: {
        backgroundColor: elm,
        color: "white"
    },
    taskDescription: {
        color: chestnut
    },
    taskTitle: {
        color: chestnut,
        fontWeight: "bold"
    },
    taskManagementTasks: {
        backgroundColor: oak,
        borderRight: "2px solid",
        borderRightColor: redwood,
        borderLeft: "2px solid",
        borderLeftColor: redwood,
    }
}