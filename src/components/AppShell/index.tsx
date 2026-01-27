import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import styles from "./app-shell.module.css";

export default function AppShell({ children }: PropsWithChildren) {
  return <Box className={styles.shell}>{children}</Box>;
}

AppShell.Header = function AppShellHeader({ children }: PropsWithChildren) {
  return <Box component="header" className={styles.header}>{children}</Box>;
};

AppShell.Navbar = function AppShellNavbar({ children }: PropsWithChildren) {
  return <Box component="nav" className={styles.navbar}>{children}</Box>;
};

AppShell.Main = function AppShellMain({ children }: PropsWithChildren) {
  return <Box component="main" className={styles.main}>{children}</Box>;
};

AppShell.Footer = function AppShellFooter({ children }: PropsWithChildren) {
  return <Box component="footer" className={styles.footer}>{children}</Box>;
};
