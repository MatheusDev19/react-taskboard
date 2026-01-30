import { Outlet } from "react-router-dom";
import AppShell from "./components/AppShell";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import FooterActions from "./components/FooterActions";

export default function RootLayout() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Drawer />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <FooterActions />
      </AppShell.Footer>
    </AppShell>
  );
}
