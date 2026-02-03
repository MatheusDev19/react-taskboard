import { Box } from "@mui/material";
import styles from "./kanban.module.css";
import { KanbanColumn, Kanban as KanbanType } from "../../types/Kanban";
import Column from "./components/Column";
import { kanbanMock } from "./kanbanMock";
import { useState } from "react";

export default function Kanban() {
  const kanban: KanbanType = kanbanMock;

  const [columns, setColumns] = useState<KanbanColumn[]>(kanban.columns);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>, columnIdx: number, taskIdx: number) {
    const key = `${columnIdx}-${taskIdx}`;
    e.dataTransfer.setData("text/plain", key);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, destColumnIdx: number, dropIdx: number) {
    e.preventDefault();
    const indexs = e.dataTransfer.getData("text/plain").split("-");
    const sourceColumnIdx = Number(indexs[0]);
    const taskIdx = Number(indexs[1]);

    const draggedTask = columns[sourceColumnIdx].tasks[taskIdx];
    if (!draggedTask) return;

    const newColumns = columns.map((col, idx) => {
      if (idx === sourceColumnIdx) {
        const newTasks = [...col.tasks];
        newTasks.splice(taskIdx, 1);

        if (sourceColumnIdx === destColumnIdx) {
          newTasks.splice(dropIdx, 0, draggedTask);
        }
        return { ...col, tasks: newTasks };
      }

      if (idx === destColumnIdx && sourceColumnIdx !== destColumnIdx) {
        const newTasks = [...col.tasks];
        newTasks.splice(dropIdx, 0, draggedTask);
        return { ...col, tasks: newTasks };
      }
      return col;
    });

    setColumns(newColumns);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <Box className={styles["wrapper"]}>
      {columns.map((column, colIdx) => (
        <Column
          key={colIdx}
          column={column}
          handleDragOver={handleDragOver}
          handleDragStart={(e, taskIdx) => {
            handleDragStart(e, colIdx, taskIdx);
          }}
          handleDrop={(e, dropIdx) => handleDrop(e, colIdx, dropIdx)}
          onDrop={(e) => handleDrop(e, colIdx, column.tasks.length)}
        />
      ))}
    </Box>
  );
}
