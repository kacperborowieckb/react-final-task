import { UserContext, UserContextType } from "@/contexts";
import { useContext } from "react";

type UseUserReturn = UserContextType & {
  login: () => void;
  register: () => void;
  logout: () => void;
};

export function useUser(): UseUserReturn {
  const context = useContext(UserContext);

  const {} = context

  function login() {}

  function register() {}

  function logout() {}

  return { ...context, login, register, logout };
}