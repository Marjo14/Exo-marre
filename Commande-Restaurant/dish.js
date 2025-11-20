"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
class Dish {
    constructor(name, category, // "starter", "main", "dessert"...
    price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
exports.Dish = Dish;
