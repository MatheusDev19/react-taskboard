import { Outlet } from "react-router-dom";
import AppShell from "./components/AppShell";

export default function RootLayout() {
  return (
    <AppShell>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>NavbarActions{/* <NavbarActions /> */}</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>FooterActions{/* <FooterActions /> */}</AppShell.Footer>
    </AppShell>
  );
}
