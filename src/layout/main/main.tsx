import { Stack, Container, Box } from "@mui/material";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import { Outlet } from "react-router-dom";
import styles from "./main.module.css";
import NavigationBar from "../../components/NavigationBar";

export default function MainLayout() {

  return (
    <Stack className={styles["page-stack"]}>
      <Header />
      <Box
        className={styles["page-content"]}
      >
        <Box id={styles["drawer"]}>
          <Drawer />
        </Box>
        <Box id={styles["navigationBar"]}>
          <NavigationBar />
        </Box>
        <Container maxWidth={false} className={styles["content-container"]}>
          <Outlet />
        </Container>
      </Box>
    </Stack>
  );
}
