import { Box, Button, Typography } from "@mui/material";
import styles from "./header.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <Box component={"header"} className={styles.header}>
      <Typography className={styles["header-title"]} variant="h4">
        TaskBoard
      </Typography>
      <Button
        onClick={() => {}}
        className={clsx(styles.createTaskBtn, "btn", "btn-contained")}
      >
        Create task
      </Button>
    </Box>
  );
}
