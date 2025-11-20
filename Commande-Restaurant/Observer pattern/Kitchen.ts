// Kitchen.ts
// Observer Pattern: Kitchen is an Observer that listens to Order updates.
//
// When an Order changes its status, notifyObservers() will call update(),
// and the kitchen can react accordingly.

import { Observer } from "./Observer";
import { Order } from "../Order";

export class Kitchen implements Observer {
  constructor(public name: string = "Main Kitchen") {}

  /**
   * Called when an observed Order changes state (ex: status changed).
   */
  update(order: Order): void {
    console.log(
      `👩‍🍳 [${this.name}] received update: Order ${order.id} is now "${order.status}"`
    );
  }
}
