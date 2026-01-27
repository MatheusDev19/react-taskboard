import { Link as MuiLink, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar-actions.module.css"

interface NavbarActionsProps {
  to: string;
}

export default function NavbarActions({ to }: NavbarActionsProps) {
  return (
    <Stack>
      <MuiLink component={Link} to={to} underline="none" className={styles.link}>
        Main
      </MuiLink>
    </Stack>
  );
}
