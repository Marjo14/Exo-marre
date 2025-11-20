// Observer.ts
// Observer Pattern: defines the behavior of an observer.
//
// Any class that wants to receive updates from an Observable
// must implement this interface (e.g., Kitchen).
//
// The Observable (e.g., Order) will call the update() method
// to notify the observer of changes.

import { Order } from "../Order";

export interface Observer {
  /**
   * Called when the observed Order has changed (ex: status update).
   */
  update(order: Order): void;
}
