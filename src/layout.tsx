import { Outlet } from "react-router-dom";
import AppShell from "./components/AppShell";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

export default function RootLayout() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        {/* <NavbarActions to="/" />   */}
        <Drawer />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>FooterActions{/* <FooterActions /> */}</AppShell.Footer>
    </AppShell>
  );
}
