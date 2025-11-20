// PercentageDiscount.ts
// Concrete Strategy: applies a percentage-based discount (ex: 10% off).
// Implements the DiscountStrategy interface.

import { DiscountStrategy } from "./DiscountStrategy";

export class PercentageDiscount implements DiscountStrategy {
  /**
   * Creates a percentage discount strategy.
   * @param percentage The discount percentage (ex: 10 for 10%)
   */
  constructor(private percentage: number) {}

  /**
   * Applies a percentage discount to the amount.
   * @param amount The subtotal before discount
   * @returns The final amount after discount
   */
  applyDiscount(amount: number): number {
    const discount = (amount * this.percentage) / 100;
    const finalTotal = amount - discount;

    console.log(
      `(Discount) ${this.percentage}% off: -${discount} €, final = ${finalTotal} €`
    );

    return finalTotal;
  }
}
