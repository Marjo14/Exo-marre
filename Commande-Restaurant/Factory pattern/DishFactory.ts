// DishFactory.ts (advanced version)
import { Dish } from "../dish";

export class DishFactory {
  private static registry: Record<string, () => Dish> = {};

  // Register a new dish type
  static register(code: string, creator: () => Dish): void {
    this.registry[code.toUpperCase()] = creator;
  }

  // Create a dish from a code
  static createDish(code: string): Dish {
    const creator = this.registry[code.toUpperCase()];
    if (!creator) {
      throw new Error(`Unknown dish code: ${code}`);
    }
    return creator();
  }
}
