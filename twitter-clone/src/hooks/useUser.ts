import { useContext } from "react";

import * as userApi from '@/api/user'
import { RegisterPayload } from '@/api'
import { UserContext, UserContextType } from "@/contexts";

type UseUserReturn = UserContextType & {
  login: (email: string) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
};

export const USER_KEY = 'user'

export function useUser(): UseUserReturn {
  const context = useContext(UserContext);

  const { setUser } = context

  async function login(email: string) {
    const userData = await userApi.login(email)

    setUser(userData)
    localStorage.setItem(USER_KEY, JSON.stringify(userData))
  }

  async function register(data: RegisterPayload) {
    await userApi.register(data)
    await login(data.email)
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(USER_KEY)
  }

  return { ...context, login, register, logout };
}