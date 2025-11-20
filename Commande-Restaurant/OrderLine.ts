import { Dish } from "./dish";

export class OrderLine {
  constructor(
    public dish: Dish,
    public quantity: number
  ) {}

  getLineTotal(): number {
    const total = this.dish.price * this.quantity;
    console.log(`     (Calcul ligne) ${this.quantity} x ${this.dish.name} = ${total} €`);
    return total;
  }
}
