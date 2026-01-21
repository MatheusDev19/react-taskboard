import { Container, Stack, Typography } from "@mui/material";
import Header from "./components/Header";
import { GlobalProvider } from "./GlobalProvider";

export default function App() {
  return (
    <GlobalProvider>
      <Stack gap={4}>
        <Header />
        <Container maxWidth="xl">
          <Typography variant="h4">Hello, Taskboard!</Typography>
        </Container>
      </Stack>
    </GlobalProvider>
  );
}
