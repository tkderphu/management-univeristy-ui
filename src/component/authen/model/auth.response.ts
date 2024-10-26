
export interface AuthResponse {
    fullName: string,
    expiredTime: number,
    token: string,
    refreshToken: string
}