import { Outlet } from "react-router-dom";
import AppShell, {
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "./components/AppShell";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import FooterActions from "./components/FooterActions";

export default function RootLayout() {
  return (
    <AppShell>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellNavbar>
        <Drawer />
      </AppShellNavbar>
      <AppShellMain>
        <Outlet />
      </AppShellMain>
      <AppShellFooter>
        <FooterActions />
      </AppShellFooter>
    </AppShell>
  );
}
