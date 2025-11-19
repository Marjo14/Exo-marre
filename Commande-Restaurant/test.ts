import { Dish } from "./dish";
import { OrderLine } from "./orderLine";
import { Order } from "./Order";

// On crée quelques plats
const burger = new Dish("Burger", "main", 12);
const salad = new Dish("Salad", "starter", 6);

// On crée une commande
const order = new Order(1, "PENDING");

// On ajoute des lignes
order.addLine(new OrderLine(burger, 2)); // 2 burgers
order.addLine(new OrderLine(salad, 1));  // 1 salade

// On calcule le total (et ça affiche les logs)
order.calculateTotal();
