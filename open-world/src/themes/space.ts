import { TaskManagementTheme } from "../types/TaskManagementTheme";

const spaceBlack = '#000000';
const spaceNavy = '#14213D';
const spaceOrange = "#FCA311";
const spaceGrey = "#E5E5E5";
const spaceWhite = "#FFFFFF";


export const spaceTheme: TaskManagementTheme = {
    taskManagementWidget: {
        fontFamily: "Space Grotesk"
    },
    taskManagementHeader: {
        backgroundColor: spaceBlack,
    },
    taskManagementHeaderTitle: {
        color: spaceWhite
    },
    taskManagementListItem: {
        backgroundColor: spaceWhite,
        marginBottom: "1em"
    },
    taskTopSection: {
        borderColor: spaceOrange,
        borderWidth: "2px"
    },
    taskBottomSection: {
        borderColor: spaceOrange,
        borderWidth: "2px"
    }, 
    taskCompletedSection: {
        borderColor: spaceOrange,
        borderWidth: "2px"
    },
    taskDetailsSection: {

    },
    taskPrioritySection: {
        borderColor: spaceOrange,
        borderWidth: "2px"
    },
    taskDueDateSection: {
        borderColor: spaceOrange,
        borderWidth: "2px",
        color: spaceBlack,
    },
    taskTagsSection: {

    },
    taskPriorityTag: {
        backgroundColor: spaceGrey,
        color: spaceBlack
    },
    taskDescription: {
        color: spaceBlack
    },
    taskTitle: {
        color: spaceBlack,
        fontWeight: "bold"
    },
    taskManagementTasks: {
        backgroundColor: spaceGrey,
        borderRight: "2px solid",
        borderRightColor: spaceOrange,
        borderLeft: "2px solid",
        borderLeftColor: spaceOrange,
    }
}