// NoDiscount.ts
// Concrete Strategy: does NOT apply any discount.
// This class implements the DiscountStrategy interface.

import { DiscountStrategy } from "./DiscountStrategy";

export class NoDiscount implements DiscountStrategy {

  /**
   * Returns the original amount without modifying it.
   * @param amount The subtotal of the order
   * @returns The same amount (no discount applied)
   */
  applyDiscount(amount: number): number {
    console.log("(Discount) No discount applied.");
    return amount;
  }
}
