import { Stack } from "@mui/material";
import useSlug from "../../hooks/useSlug";
import BoardHeader from "./components/Header/header";
import Kanban from "../../components/Kanban";

export default function Board() {
  const { slug } = useSlug();

  return (
    <Stack width={"100%"} height={"100%"}>
      <BoardHeader title={slug} />
      <Kanban />
    </Stack>
  );
}
