// Observable.ts
// Observer Pattern: defines the behavior of an observable object.
//
// Any class that wants to be "observed" (like Order) should implement this
// interface so that observers (like Kitchen) can subscribe and get updates.

import { Observer } from "./Observer";

export interface Observable {
  /**
   * Register a new observer that wants to listen to this observable.
   */
  addObserver(observer: Observer): void;
  /**
   * Unregister an observer that no longer wants to listen.
   */
  removeObserver(observer: Observer): void;
  /**
   * Notify all registered observers that something has changed.
   */
  notifyObservers(): void;
}
