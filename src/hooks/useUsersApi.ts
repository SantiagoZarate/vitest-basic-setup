import { useContext } from "react";
import { userContext } from "../context/userContext";

export function useUsersApi() {
  const value = useContext(userContext)

  if (!value) throw Error('Context cannot be used here')

  return value
}