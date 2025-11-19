Plat = infos sur un plat
LigneCommande = un plat + quantité
Commande = ensemble de lignes
Client = personne qui commande
 
 
 ```mermaid

classDiagram

%% --------- Domain model ---------
class Order {
  - id : number
  - status : string
  - lines : OrderLine[]
  - observers : Observer[]
  - discountStrategy : DiscountStrategy
  + calculateTotal() number
  + addObserver(o : Observer) : void
  + removeObserver(o : Observer) : void
  + notifyObservers() : void
}

class OrderLine {
  - quantity : number
  - dish : Dish
  + getLineTotal() : number
}

class Dish {
  - name : string
  - category : string
  - price : number
}

class Customer {
  - id : number
  - name : string
  - tableNumber : number
}

class Invoice {
  - id : number
  - date : Date
  - totalAmount : number
  - taxAmount : number
  - order : Order
  + generate() : void
}

%% --------- Factory ---------
class DishFactory {
  + createDish(code : string) : Dish
}

%% --------- Strategy ---------
class DiscountStrategy {
  <<interface>>
  + applyDiscount(amount: number) : number
}

class NoDiscount {
  + applyDiscount(amount: number) : number
}

class PercentageDiscount {
  + applyDiscount(amount: number) : number
}

class HappyHourDiscount {
  + applyDiscount(amount: number) : number
}

%% --------- Observer ---------
class Observable {
  <<interface>>
  + addObserver(o : Observer) : void
  + removeObserver(o : Observer) : void
  + notifyObservers() : void
}

class Observer {
  <<interface>>
  + update(order : Order) : void
}

class Kitchen {
  + update(order : Order) : void
}

%% --------- Relations ---------
Customer "1" --> "0..*" Order
Order "1" *-- "1..*" OrderLine
OrderLine "1" --> "1" Dish

Order "1" --> "1" Invoice

DishFactory --> Dish

Order --> DiscountStrategy
DiscountStrategy <|.. NoDiscount
DiscountStrategy <|.. PercentageDiscount
DiscountStrategy <|.. HappyHourDiscount

Observable <|.. Order
Observer <|.. Kitchen


```
Customer passe une Order, qui contient plusieurs OrderLines, chacune liée à un Dish.
Order calcule le total et délègue la réduction à une DiscountStrategy (Strategy pattern).
DishFactory centralise la création des Dish à partir du menu (Factory pattern).
Order implémente Observable et notifie Kitchen (Observer) quand le statut change (Observer pattern).
Invoice est créée à partir d’une Order, avec totalAmount et taxAmount

✔ 1. Le statut concerne la commande entière :
Parce qu’une commande (Order) est servie en bloc, même si elle contient plusieurs plats.

Donc : status : string
peut devenir "PENDING", "IN_PREPARATION", "READY", etc.

✔ 2. Quand le statut change : → On appelle notifyObservers()
C’est ici que l’événement se produit :
order.setStatus("IN_PREPARATION")
// → notifyObservers()

Pourquoi ?
Parce que ce changement “intéresse” la cuisine.

✔ 3. Order implémente Observable  → il peut prévenir quelqu’un

Grâce aux méthodes :
addObserver()
removeObserver()
notifyObservers()

✔ 4. Kitchen implémente Observer → elle sait réagir

Elle reçoit : update(order)
Et peut lire : order.status

Puis afficher :
➡️ “Commande 12 : en préparation”
➡️ “Commande 12 : prête”

🎯 Résumé final, ultra clair :

Quand Order change son statut, elle appelle notifyObservers().
Kitchen reçoit la mise à jour via update(order),
puis lit order.status pour afficher l’état de la commande.
