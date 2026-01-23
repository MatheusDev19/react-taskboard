import { Stack, Container, Box } from "@mui/material";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import { Outlet } from "react-router-dom";
import styles from "./main.module.css";

export default function MainLayout() {
  return (
    <Stack className={styles["page-stack"]}>
      <Header />
      <Box className={styles["page-content"]}>
        <Drawer />
        <Container maxWidth="xl" className={styles["content-container"]}>
          <Outlet />
        </Container>
      </Box>
    </Stack>
  );
}
