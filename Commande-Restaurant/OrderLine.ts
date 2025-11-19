import { Dish } from "./dish";

export class OrderLine {
    constructor(
    public dish : Dish,
    public quantity: number
) {}

getLineTotal(): number {
    return this.dish.price * this.quantity;
}

}
