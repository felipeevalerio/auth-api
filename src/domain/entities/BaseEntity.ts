export abstract class BaseEntity<T> {
    protected _id: string;
    protected _createdAt: Date;
    protected _updatedAt: Date;
    public props: T;

    constructor(props: T) {
        this._id = crypto.randomUUID();
        this._createdAt = new Date();
        this._updatedAt = new Date();
        this.props = props;
    }
}