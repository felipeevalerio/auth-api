import { BaseEntity } from "./BaseEntity";

interface UserProps {
    email: string;
    password: string;
    fullName: string;
}

export class User extends BaseEntity<UserProps>{
    private constructor(props: UserProps) {
        super(props);
    }

    static create(props: UserProps) {
        return new User(props);
    }
}