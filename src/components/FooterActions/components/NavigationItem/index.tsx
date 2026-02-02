import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./navigation-item.module.css";

interface NavigationItemProps {
  title: string;
  icon: string;
  subItems: { title: string; url: string }[];
}

export default function NavigationItem({ title, icon, subItems }: NavigationItemProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles["navigation-item"]}>
      <IconButton className={styles["icon-button"]} onClick={handleClick} disableRipple>
        <Box component="img" src={icon} alt={`${title} Icon`} className={styles["icon-img"]} />
      </IconButton>

      {subItems.length > 0 && (
        <Menu
          id="item-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className={styles.menu}
          slotProps={{
            list: {
              "aria-labelledby": "item-button",
            },
          }}
        >
          {subItems.map((subItem) => (
            <MenuItem
              key={subItem.title}
              onClick={() => {
                navigate(subItem.url);
                handleClose();
              }}
              className={styles["menu-item"]}
            >
              {subItem.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
