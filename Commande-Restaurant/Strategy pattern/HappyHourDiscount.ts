// HappyHourDiscount.ts
// Concrete Strategy: applies a stronger discount during happy hour.
// Implements the DiscountStrategy interface.

import { DiscountStrategy } from "./DiscountStrategy";

export class HappyHourDiscount implements DiscountStrategy {
  /**
   * Create a happy hour discount.
   * @param percentage The discount percentage applied (default = 20%)
   */
  constructor(private percentage: number = 20) {}

  /**
   * Applies a special "happy hour" discount to the amount.
   * @param amount The subtotal before discount
   * @returns The discounted final amount
   */
  applyDiscount(amount: number): number {
    const discount = (amount * this.percentage) / 100;
    const finalTotal = amount - discount;

    console.log(
      `(Discount) Happy Hour ${this.percentage}%: -${discount} €, final = ${finalTotal} €`
    );

    return finalTotal;
  }
}
