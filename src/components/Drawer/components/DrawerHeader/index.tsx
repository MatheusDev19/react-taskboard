import { Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./drawerHeader.module.css";

interface DrawerHeaderProps {
  drawerToggle: boolean;
  setDrawerToggle: (value: boolean) => void;
}

export default function DrawerHeader({ drawerToggle, setDrawerToggle }: DrawerHeaderProps) {
  return (
    <Box className={styles["drawer-header"]} justifyContent={drawerToggle ? "center" : "flex-end"}>
      <IconButton className={styles["icon-button"]} onClick={() => setDrawerToggle(!drawerToggle)}>
        {drawerToggle ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </Box>
  );
}
