import { Box, Stack, Typography, IconButton } from "@mui/material";
import { KanbanTask } from "../../../../types/Kanban";

import generic_avatar from "../../../../assets/kanban/generic_avatar.svg";
import styles from "./task.module.css";
import { TaskLabels } from "./TaskLabel";

interface TaskProps {
  task: KanbanTask;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, targetId: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

export default function Task({ task, handleDragStart, handleDrop, handleDragOver }: TaskProps) {
  return (
    <Box
      className={styles["task-card"]}
      draggable={true}
      onDragStart={handleDragStart}
      onDrop={(e) => handleDrop(e, task.id)}
      onDragOver={handleDragOver}
      onClick={() => {
        console.log("Click no card");
      }}
    >
      <Stack className={styles["task-content"]}>
        <Typography className={styles["task-description"]}>{task.description}</Typography>
        <Box className={styles["task-card-footer"]}>
          <Box className={styles["chip-row"]}>
            <TaskLabels labels={task.labels} />
          </Box>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log("Click no botão");
            }}
          >
            <Box
              component="img"
              src={generic_avatar}
              alt="Avatar do responsável"
              className={styles["icon-img"]}
            />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
