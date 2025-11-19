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
  - discountStrategy : DiscountStrategy
  + calculateTotal() number
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


Customer "1" --> "0..*" Order
Order "1" *-- "1..*" OrderLine
OrderLine "1" --> "1" Dish
DishFactory --> Dish
Order --> DiscountStrategy
DiscountStrategy <|.. NoDiscount
DiscountStrategy <|.. PercentageDiscount
DiscountStrategy <|.. HappyHourDiscount



```
