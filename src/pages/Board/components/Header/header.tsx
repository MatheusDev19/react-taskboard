import { Box, Typography, Button } from "@mui/material";
import styles from "./header.module.css";
interface BoardHeaderProps {
  title: string;
}

export default function BoardHeader({ title }: BoardHeaderProps) {
  return (
    <Box className={styles.header}>
      <Box className={styles["header-content"]}>
        <Typography className={styles["header-title"]}>{title}</Typography>
        <Button className="btn btn-contained">CREATE TASK</Button>
      </Box>
    </Box>
  );
}
