import { useParams } from "react-router-dom";

export function useGetSlug() {
  const { slug } = useParams<{ slug: string }>();
  return slug || "";
}
