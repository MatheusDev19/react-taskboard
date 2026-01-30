import boardIcon from "../../assets/layout/navigationBar/icons/board.svg";
import clockIcon from "../../assets/layout/navigationBar/icons/clock.svg";
import { Box } from "@mui/material";
import NavigationItem from "./components/NavigationItem";
import styles from "./footer-actions.module.css";

export default function FooterActions() {
  return (
    <Box className={styles.wrapper}>
      <NavigationItem
        title={"Boards"}
        icon={boardIcon}
        subItems={[
          { title: "Software Engineer", url: "/software-engineer" },
          { title: "Requisition Engineer", url: "/requisition-engineer" },
        ]}
      />
      <NavigationItem
        title={"Recents"}
        icon={clockIcon}
        subItems={[{ title: "Software Engineer", url: "/software-engineer" }]}
      />
    </Box>
  );
}
