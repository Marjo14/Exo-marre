"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
const orderLine_1 = require("./orderLine");
const Order_1 = require("./Order");
// On crée quelques plats
const burger = new dish_1.Dish("Burger", "main", 12);
const salad = new dish_1.Dish("Salad", "starter", 6);
// On crée une commande
const order = new Order_1.Order(1, "PENDING");
// On ajoute des lignes
order.addLine(new orderLine_1.OrderLine(burger, 2)); // 2 burgers
order.addLine(new orderLine_1.OrderLine(salad, 1)); // 1 salade
// On calcule le total (et ça affiche les logs)
order.calculateTotal();
