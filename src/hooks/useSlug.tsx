import { useLocation } from "react-router-dom";

const useSlug = () => {
  const pageUrl = useLocation().pathname.split("/");
  const slug = pageUrl.filter(Boolean).pop() || "";
  return { slug };
};

export default useSlug;
