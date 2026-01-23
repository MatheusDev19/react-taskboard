import { Box, IconButton, Typography } from "@mui/material";
import styles from "./header.module.css";
import genericAvatar from "../../assets/layout/header/icons/generic_avatar.svg";
import notificationIcon from "../../assets/layout/header/icons/notifications.svg";

export default function Header() {
  return (
    <Box component={"header"} className={styles.header}>
      <Typography className={styles["header-title"]} variant="h4">
        TaskBoard
      </Typography>

      <Box className={styles["header-icons"]}>
        <IconButton>
          <Box component="img" src={notificationIcon} alt="Notifications" />
        </IconButton>
        <IconButton>
          <Box component="img" src={genericAvatar} alt="Generic avatar" />
        </IconButton>
      </Box>
    </Box>
  );
}
