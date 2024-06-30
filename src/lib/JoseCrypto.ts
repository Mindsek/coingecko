import { SignJWT, jwtVerify } from "jose";
const secretKey = "secret"
const key = new TextEncoder().encode(secretKey)

export const encrypt = async (payload: any) => {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(key)
}

export const decrypt = async (token: string) => {
    const { payload } = await jwtVerify(token, key, {
        algorithms: ['HS256']
    })
    return payload
}