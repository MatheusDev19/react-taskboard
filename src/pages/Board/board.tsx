import { Stack } from "@mui/material";
import useSlug from "../../hooks/useSlug";
import BoardHeader from "./components/Header/header";

export default function Board() {
  const { slug } = useSlug();

  return (
    <Stack>
      <BoardHeader title={slug} />
    </Stack>
  );
}
