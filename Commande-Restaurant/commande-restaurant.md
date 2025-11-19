Plat = infos sur un plat

LigneCommande = un plat + quantité

Commande = ensemble de lignes

Client = personne qui commande
 
 
 ```mermaid
classDiagram
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

class DishFactory {
  + createDish(code : string) : Dish
}

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

class HappyHourDiscount{
  + applyDiscount(amount: number) : number
}

class Invoice {
  - id : number
  - date : Date
  - totalAmount : number
  - taxAmount : number
  - order : Order
  + generate() : void
}

class Kitchen {
  + update(order : Order) : void
}


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

Customer "1" --> "0..*" Order
Order "1" *-- "1..*" OrderLine
OrderLine "1" --> "1" Dish
DishFactory --> Dish
Order --> DiscountStrategy
DiscountStrategy <|.. NoDiscount
DiscountStrategy <|.. PercentageDiscount
DiscountStrategy <|.. HappyHourDiscount
Observable <|.. Order
Observer <|.. Kitchen
Order "1" --> "1" Invoice


```
