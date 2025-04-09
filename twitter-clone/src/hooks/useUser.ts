import { useContext, useEffect } from "react";

import { UserContext, UserContextType } from "@/contexts";
import userApi from '@/api/user'

type UseUserReturn = UserContextType & {
  login: (email: string) => Promise<void>;
  register: () => Promise<void>;
  logout: () => void;
};

export const USER_KEY = 'user'

export function useUser(): UseUserReturn {
  const context = useContext(UserContext);

  const { user, setUser } = context

  useEffect(() => {
    if (user) return

   const userDataRaw = localStorage.getItem(USER_KEY)
   
    if (userDataRaw) {
      setUser(JSON.parse(userDataRaw))
    }
  }, [])

  async function login(email: string) {
    const userData = await userApi.login(email)

    setUser(userData)
    localStorage.setItem(USER_KEY, JSON.stringify(userData))
  }

  async function register() {}

  function logout() {
    setUser(null)
    localStorage.removeItem(USER_KEY)
  }

  return { ...context, login, register, logout };
}