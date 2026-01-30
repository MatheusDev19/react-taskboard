import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import styles from "./app-shell.module.css";

export function AppShell({ children }: PropsWithChildren) {
  return <Box className={styles.shell}>{children}</Box>;
}

export function AppShellHeader({ children }: PropsWithChildren) {
  return (
    <Box component="header" className={styles.header}>
      {children}
    </Box>
  );
}

export function AppShellNavbar({ children }: PropsWithChildren) {
  return (
    <Box component="nav" className={styles.navbar}>
      {children}
    </Box>
  );
}

export function AppShellMain({ children }: PropsWithChildren) {
  return (
    <Box component="main" className={styles.main}>
      {children}
    </Box>
  );
}

export function AppShellFooter({ children }: PropsWithChildren) {
  return (
    <Box component="footer" className={styles.footer}>
      {children}
    </Box>
  );
}

export default AppShell;
