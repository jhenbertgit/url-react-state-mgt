import { useSearchParams } from "react-router-dom";

export const useURLId = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return { id };
};
