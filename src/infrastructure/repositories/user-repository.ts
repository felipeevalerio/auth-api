import { User } from "../../domain/entities/User";
import { compareIfEquals } from "../../utils/encrypt";
import { prisma } from "../ioc/prisma";
import { IUserRepository } from "./user-repository-interface";

export class UserRepository implements IUserRepository {
    async create(user: User): Promise<string> {
        try {
            const { email, password, fullName } = user.props
        
            const createdUser = await prisma.user.create({
                data: {
                    email: email,
                    password: password,
                    fullName: fullName,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })
    
            return createdUser.id
        }
        catch(err) {
            throw new Error('User already exists.')
        }
    }

    async login(email: string, password: string): Promise<User> {
        const userFromDb = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        const passwordIsValid = await compareIfEquals(password, userFromDb?.password ?? '')

        if (!userFromDb || !passwordIsValid) throw new Error('Invalid credentials')
        
        return {
            ...userFromDb,
            props: {
                email: userFromDb.email,
                password: userFromDb.password,
                fullName: userFromDb.fullName
            }
        } satisfies User
    }

    async update(user: User): Promise<void> {
        try {
            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    email: user.props.email,
                    password: user.props.password,
                    fullName: user.props.fullName,
                    updatedAt: user.updatedAt
                }
            })
        }
        catch(err) {
            throw new Error('Error while updating user.')
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.user.delete({
                where: {
                    id: id
                }
            })
        }
        catch(err) {
            throw new Error('Error while deleting user.')
        }
    }

    async getAll(): Promise<User[]> {
        const usersFromDb = await prisma.user.findMany()
        const mappedUsers = usersFromDb.map(user => ({
            ...user,
            props: {
                email: user.email,
                password: user.password,
                fullName: user.fullName
            }
        } satisfies User))

        return mappedUsers
    }
}