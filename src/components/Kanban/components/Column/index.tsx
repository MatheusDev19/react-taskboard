import { Stack, Box, Typography } from "@mui/material";
import { KanbanColumn, KanbanTask } from "../../../../types/Kanban";
import styles from "./column.module.css";
import Task from "../Task";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  column: KanbanColumn;
  tasks: KanbanTask[];
}

export default function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });
  return (
    <Stack className={styles["column"]}>
      <Box className={styles["status-bar"]}>
        <Typography className={styles["column-name"]}>{column.name}</Typography>
        <Box className={styles["task-count"]}>{tasks.length}</Box>
      </Box>
      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <Box
          ref={setNodeRef}
          sx={{
            height: tasks.length === 0 ? "120px" : "24px",
            bgcolor: isOver ? "#c4c4c4" : "transparent",
            transition: "background 0.2s",
          }}
        />
      </SortableContext>
    </Stack>
  );
}
