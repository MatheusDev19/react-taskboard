import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <Box>
      <IconButton
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: "#ffffff",
          },
          "&.Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              color: "#ffffff",
            },
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "#8e86ffce",
            transition: "background-color 0.3s ease",
          },
        }}
        onClick={handleClick}
      >
        <Box component="img" src={icon} alt={`${title} Icon`} />
      </IconButton>

      {subItems.length > 0 && (
        <Menu
          id="item-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "item-button",
            },
          }}
        >
          {subItems.map((subItem) => (
            <MenuItem key={subItem.title} onClick={() => navigate(subItem.url)}>
              {subItem.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
