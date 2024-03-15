export abstract class BaseEntity<T> {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public props: T;

    constructor(props: T) {
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.props = props;
    }
}