import { Container, Stack, Typography } from "@mui/material";
import Header from "./components/Header";

export default function App() {
  return (
    <Stack gap={4}>
      <Header />
      <Container maxWidth="xl">
        <Typography variant="h4">Hello, Taskboard!</Typography>
      </Container>
    </Stack>
  );
}
