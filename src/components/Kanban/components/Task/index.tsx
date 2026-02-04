import { Box, Stack, Typography, IconButton } from "@mui/material";
import { KanbanTask } from "../../../../types/Kanban";

import generic_avatar from "../../../../assets/kanban/generic_avatar.svg";
import styles from "./task.module.css";
import { TaskLabels } from "./TaskLabel";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskProps {
  task: KanbanTask;
}

export default function Task({ task }: TaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Box
      ref={setNodeRef}
      style={{ ...style, position: "relative" }}
      className={styles["task-card"]}
    >
      <Box
        className={styles["drag-handle"]}
        {...attributes}
        {...listeners}
        style={{ touchAction: "none" }}
      >
        <Box className={styles["grab-bars"]}>
          <Box className={styles["grab-bar"]} />
          <Box className={styles["grab-bar"]} />
          <Box className={styles["grab-bar"]} />
        </Box>
      </Box>
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
