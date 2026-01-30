import { Box, Typography, Button } from "@mui/material";
import styles from "./header.module.css";
interface BoardHeaderProps {
  title: string;
}

export default function BoardHeader({ title }: BoardHeaderProps) {
  return (
    <Box className={styles.header}>
      <Box className={styles["header-content"]}>
        <Typography
          className={styles["header-title"]}
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          {title}
        </Typography>
        <Button
          className="btn btn-contained"
          sx={{
            display: { xs: "none !important", md: "inline-flex !important" },
          }}
        >
          CREATE TASK
        </Button>

        <Button
          className="btn btn-contained"
          sx={{ display: { md: " none !important" } }}
        >
          +
        </Button>
      </Box>
    </Box>
  );
}
