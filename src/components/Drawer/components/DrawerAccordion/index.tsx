import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
  Stack,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pinboardIcon from "../../../../assets/layout/sidebar/icons/pinboard.svg";
import { useNavigate } from "react-router-dom";
import styles from "./drawerAccordion.module.css";
import clsx from "clsx";
import useGetSlug from "../../../../hooks/use-get-slug";

interface DrawerAccordionProps {
  drawerToggle: boolean;
  setDrawerToggle: (value: boolean) => void;
  icon: string;
  title: string;
  subItems: { title: string; url: string }[];
}

export default function DrawerAccordion({
  drawerToggle,
  setDrawerToggle,
  icon,
  title,
  subItems,
}: DrawerAccordionProps) {
  const navigate = useNavigate();
  const { slug } = useGetSlug();
  const [expanded, setExpanded] = useState(!drawerToggle);

  return (
    <Accordion
      expanded={expanded && !drawerToggle}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      className={styles["drawer-accordion"]}
      sx={{
        "&.Mui-disabled": {
          backgroundColor: "transparent",
          opacity: 1,
        },
        "& .MuiAccordionSummary-root.Mui-disabled": {
          opacity: 1,
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            className={styles["expand-more"]}
            sx={{ display: drawerToggle ? "none" : "block" }}
          />
        }
      >
        <Box className={styles["summary-content"]}>
          <Box
            component="img"
            src={icon}
            alt={`${title} Icon`}
            className={styles["summary-icon"]}
            onClick={(e) => {
              if (drawerToggle) {
                e.stopPropagation();
                setDrawerToggle(false);
                setExpanded(true);
              }
            }}
          />
          <Typography
            className={styles["summary-title"]}
            display={drawerToggle ? "none" : "block"}
          >
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          pl: drawerToggle ? 0 : 3,
          display: drawerToggle ? "none" : "block",
        }}
      >
        <Stack spacing={2}>
          {subItems.map((subItem) => (
            <Box
              key={subItem.title}
              className={clsx(styles["details-item"], {
                [styles["details-item-active"]]: slug.includes(
                  subItem.url.split("/").pop() || "",
                ),
              })}
              onClick={() => {
                navigate(subItem.url);
              }}
            >
              <Box
                component="img"
                src={pinboardIcon}
                alt="Pin Icon"
                className={styles["details-icon"]}
              />
              <Typography className={styles["details-title"]}>
                {subItem.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
