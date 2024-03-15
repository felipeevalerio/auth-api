import { encrypt } from "../../utils/encrypt";
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

    public static async create(props: UserProps) {
        const encryptedPassword = await encrypt(props.password)
        
        return new User({
            ...props, 
            password: encryptedPassword,
        });
    }
}