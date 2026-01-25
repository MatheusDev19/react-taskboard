import { Outlet } from "react-router-dom";
import AppShell from "./components/AppShell";

export default function RootLayout() {
  return (
    <AppShell>
      <AppShell.Navbar>{/* <NavbarActions /> */}</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>{/* <FooterActions /> */}</AppShell.Footer>
    </AppShell>
  );
}
