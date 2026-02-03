import { Kanban } from "../../types/Kanban";

export const kanbanMock: Kanban[] = [
  {
    slug: "software-engineer",
    columns: [
      {
        id: "TODO",
        name: "To do",
        tasks: [
          {
            id: "1",
            description: "Task 1",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office", "Desktop"],
          },
          {
            id: "2",
            description: "Task 2",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
        ],
      },
      {
        id: "INPROGRESS",
        name: "In Progress",
        tasks: [
          {
            id: "3",
            description: "Task 3333333333333333333333333333333 azsdasdas",
            status: "done",
            responsible: "user",
            labels: ["Office Test 1", "Office Test 2", "Home", "Office"],
          },
        ],
      },
      {
        id: "ONREVIEW",
        name: "On Review",
        tasks: [
          {
            id: "4",
            description: "Task 4",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
          {
            id: "5",
            description: "Task 5",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
        ],
      },
      {
        id: "DONE",
        name: "Done",
        tasks: [
          {
            id: "6",
            description: "Task 6",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
          {
            id: "7",
            description: "Task 7",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
        ],
      },
    ],
  },
  {
    slug: "requisition-engineer",
    columns: [
      {
        id: "TODO",
        name: "To do",
        tasks: [
          {
            id: "1",
            description: "Task 1",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
        ],
      },
      {
        id: "INPROGRESS",
        name: "In Progress",
        tasks: [
          {
            id: "2",
            description: "Task 3333333333333333333333333333333 azsdasdas",
            status: "done",
            responsible: "user",
            labels: ["Office Test 1", "Office Test 2", "Home", "Office"],
          },
        ],
      },
      {
        id: "ONREVIEW",
        name: "On Review",
        tasks: [
         
        ],
      },
      {
        id: "DONE",
        name: "Done",
        tasks: [
         
          {
            id: "3",
            description: "Task 3",
            status: "done",
            responsible: "user",
            labels: ["Home", "Office"],
          },
        ],
      },
    ],
  },
];
