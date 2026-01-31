import { Box, Stack, Typography } from "@mui/material";
import styles from "./kanban.module.css";
import { Kanban as KanbanType } from "../../types/Kanban";
import { kanbanMock } from "./kanbanMock";

export default function Kanban() {
  const kanban: KanbanType = kanbanMock;

  return (
    <Box className={styles["wrapper"]}>
      {kanban.columns.map((KCuluns, index) => (
        <Stack key={index} className={styles["column"]}>
          <Box className={styles["status-bar"]}>
            <Typography className={styles["column-name"]}>{KCuluns.name}</Typography>
            <Box className={styles["task-count"]}>{KCuluns.tasks.length}</Box>
          </Box>
        </Stack>
      ))}
    </Box>
  );
}
