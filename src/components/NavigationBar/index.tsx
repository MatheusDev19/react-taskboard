import bgImage from "../../assets/layout/navigationBar/images/sideBarBg.svg";
import boardIcon from "../../assets/layout/navigationBar/icons/board.svg";
import clockIcon from "../../assets/layout/navigationBar/icons/clock.svg";
import { Box } from "@mui/material";
import NavigationItem from "./components/NavigationItem";

export default function NavigationBar() {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        backgroundImage: `url(${bgImage})`,
        justifyContent: "space-around",
        py: 0.5,
      }}
    >
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
