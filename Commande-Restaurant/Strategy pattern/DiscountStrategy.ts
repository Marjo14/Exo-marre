// DiscountStrategy.ts
// Strategy Pattern: defines the common interface for all discount strategies.
//
// Any discount type (NoDiscount, PercentageDiscount, HappyHourDiscount, etc.)
// must implement this interface.

export interface DiscountStrategy {
  /**
   * Apply a discount to the given amount.
   * @param amount The subtotal before discount
   * @returns The discounted final amount
   */
  applyDiscount(amount: number): number;
}
