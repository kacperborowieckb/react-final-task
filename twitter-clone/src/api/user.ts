import { User } from "@/types"

import { httpService } from "./httpService"

export type RegisterPayload = {
    name: string;
    email: string;
}

const USER_ENDPOINTS = {
    LOGIN: '/users',
    REGISTER: '/users'
} as const

async function login(email: string): Promise<User> {
    return (await httpService.get<User>(`${USER_ENDPOINTS.LOGIN}/${email}`)).data
}

async function register(data: RegisterPayload): Promise<void> {
    await httpService.post(USER_ENDPOINTS.REGISTER, { ...data, id: data.email })
}

export default {
    login,
    register
}

