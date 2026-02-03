import { Stack, Box, Typography } from "@mui/material";
import { KanbanColumn } from "../../../../types/Kanban";
import styles from "./column.module.css";
import Task from "../Task";

interface ColumnProps {
  column: KanbanColumn;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}

export default function Column({
  column,
  handleDragStart,
  handleDragOver,
  handleDrop,
  onDrop,
}: ColumnProps) {
  return (
    <Stack className={styles["column"]}>
      <Box className={styles["status-bar"]}>
        <Typography className={styles["column-name"]}>{column.name}</Typography>
        <Box className={styles["task-count"]}>{column.tasks.length}</Box>
      </Box>

      {column.tasks.map((task, taskIdx) => (
        <Task
          key={taskIdx}
          task={task}
          handleDragStart={(e) => handleDragStart(e, taskIdx)}
          handleDrop={(e) => handleDrop(e, taskIdx)}
          handleDragOver={handleDragOver}
        />
      ))}
      {
        <Box
          onDragOver={handleDragOver}
          onDrop={(e) => onDrop(e, column.tasks.length - 1)}
          sx={{ height: "100%" }}
        />
      }
    </Stack>
  );
}
