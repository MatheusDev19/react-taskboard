import { Box } from "@mui/material";
import styles from "./kanban.module.css";
import { Kanban as KanbanType } from "../../types/Kanban";
import { kanbanMock } from "./kanbanMock";
import Column from "./components/Column";

export default function Kanban() {
  const kanban: KanbanType = kanbanMock;

  return (
    <Box className={styles["wrapper"]}>
      {kanban.columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </Box>
  );
}
