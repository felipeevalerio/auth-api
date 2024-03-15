import { hash, compare } from 'bcrypt'

const DEFAULT_SALT = 8

export async function encrypt(data: string, salt: number = DEFAULT_SALT, ) {
    return hash(data, salt)
}

export async function compareIfEquals(data: string, encryptedData: string) {
    return compare(data, encryptedData)
}