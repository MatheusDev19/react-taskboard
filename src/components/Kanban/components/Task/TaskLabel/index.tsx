// TaskLabels.tsx
import { Box, Chip } from "@mui/material";
import styles from "./task-label.module.css";

export function TaskLabels({ labels }: { labels: string[] }) {
  const visibleLabels = labels.slice(0, 2);
  const extraCount = labels.length - 2;

  return (
    <>
      <Box className={styles["label-list"]}>
        {visibleLabels.map((label, idx) => (
          <Chip key={idx} label={label} className={styles["label-chip"]} />
        ))}
      </Box>
      {extraCount > 0 && <Chip label={`+${extraCount}`} className={styles["label-count"]} />}
    </>
  );
}
