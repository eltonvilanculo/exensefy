import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
export function useUser() {
  return useContext(UserContext);
}
