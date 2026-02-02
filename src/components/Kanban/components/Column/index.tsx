import { Stack, Box, Typography } from "@mui/material";
import { KanbanColumn } from "../../../../types/Kanban";
import styles from "./column.module.css";

interface ColumnProps {
  column: KanbanColumn;
}

export default function Column({ column }: ColumnProps) {
  return (
    <Stack className={styles["column"]}>
      <Box className={styles["status-bar"]}>
        <Typography className={styles["column-name"]}>{column.name}</Typography>
        <Box className={styles["task-count"]}>{column.tasks.length}</Box>
      </Box>
    </Stack>
  );
}
