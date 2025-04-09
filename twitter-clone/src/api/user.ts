import { User } from "@/types"

import { httpService } from "./httpService"

export type RegisterPayload = {
    name: string;
    email: string;
}

const USER_ENDPOINTS = {
    LOGIN: '/login',
    REGISTER: '/register'
} as const

export async function login(email: string): Promise<User> {
    return (await httpService.get<User>(`${USER_ENDPOINTS.LOGIN}/${email}`)).data
}

export async function register(data: RegisterPayload): Promise<void> {
    const userId = data.name.replace(/\s/g, '').toLowerCase()

    await httpService.post(USER_ENDPOINTS.REGISTER, { ...data, id: userId })
}


