import { Stack } from "@mui/material";
import BoardHeader from "./components/Header/header";
import Kanban from "../../components/Kanban";
import { useGetSlug } from "../../hooks/use-get-slug";

export default function Board() {
  const slug = useGetSlug();

  return (
    <Stack width={"100%"} height={"100%"}>
      <BoardHeader title={slug} />
      <Kanban />
    </Stack>
  );
}
