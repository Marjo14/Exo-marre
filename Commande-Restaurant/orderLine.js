"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLine = void 0;
class OrderLine {
    constructor(dish, quantity) {
        this.dish = dish;
        this.quantity = quantity;
    }
    getLineTotal() {
        const total = this.dish.price * this.quantity;
        console.log(`     (Calcul ligne) ${this.quantity} x ${this.dish.name} = ${total} €`);
        return total;
    }
}
exports.OrderLine = OrderLine;
