import { Dish } from "./dish";

export class OderLine {
    constructor(
    public dish : Dish,
    public quantity: number
) {}

getLineTotal(): number {
    return this.dish.price * this.quantity;
}

}
