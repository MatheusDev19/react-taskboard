import { Stack, Box, Typography } from "@mui/material";
import { KanbanColumn, KanbanTask } from "../../../../types/Kanban";
import styles from "./column.module.css";
import Task from "../Task";
import { useState } from "react";

interface ColumnProps {
  column: KanbanColumn;
}

export default function Column({ column }: ColumnProps) {
  const [tasks, setTasks] = useState<KanbanTask[]>(column.tasks);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>, id: string) {
    e.dataTransfer.setData("text/plain", id);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, dropIndex: number) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const draggedTask = tasks.find((task) => task.id === taskId);
    if (!draggedTask) return;

    const newTasks = tasks.filter((task) => task.id !== taskId);

    newTasks.splice(dropIndex, 0, draggedTask);

    setTasks(newTasks);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <Stack className={styles["column"]}>
      <Box className={styles["status-bar"]}>
        <Typography className={styles["column-name"]}>{column.name}</Typography>
        <Box className={styles["task-count"]}>{tasks.length}</Box>
      </Box>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleDragStart={(e) => handleDragStart(e, task.id)}
          handleDrop={(e) => handleDrop(e, index)}
          handleDragOver={handleDragOver}
        />
      ))}
    </Stack>
  );
}
