import { Box, Stack } from "@mui/material";
import sideBarBg from "../../assets/layout/sidebar/images/sideBarBg.svg";
import { useState } from "react";
import DrawerHeader from "./components/DrawerHeader";

import boardIcon from "../../assets/layout/sidebar/icons/board.svg";
import clockIcon from "../../assets/layout/sidebar/icons/clock.svg";
import DrawerAccordion from "./components/DrawerAccordion";
import styles from "./drawer.module.css";

export default function Drawer() {
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <Box
      className={styles.drawer}
      sx={{
        display: { xs: "none", md: "block" },
        backgroundImage: `url(${sideBarBg})`,
        width: drawerToggle ? 60 : 244,
      }}
    >
      <Stack spacing={2}>
        <DrawerHeader
          drawerToggle={drawerToggle}
          setDrawerToggle={setDrawerToggle}
        />

        <Stack px={1}>
          <DrawerAccordion
            drawerToggle={drawerToggle}
            setDrawerToggle={setDrawerToggle}
            icon={boardIcon}
            title="Boards"
            subItems={[
              { title: "Software Engineer", url: "/software-engineer" },
              { title: "Requisition Engineer", url: "/requisition-engineer" },
            ]}
          />

          <DrawerAccordion
            drawerToggle={drawerToggle}
            setDrawerToggle={setDrawerToggle}
            icon={clockIcon}
            title="Recent"
            subItems={[
              { title: "Software Engineer", url: "/software-engineer" },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
