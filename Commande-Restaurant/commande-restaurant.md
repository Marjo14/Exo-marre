
 ```mermaid
classDiagram
class Commande {
  - id : number
  - statut : string
  - lignes : LigneCommande[]
  + calculerTotal() number
}
class LigneCommande {
  - quantite : number
  - plat : Plat
}
class Plat {
  - nom : string
  - type : string
  - prix : number
}
class Client {
  - id : number
  - nom : string
  - numeroTable : number
}

Client "1" --> "0..*" Commande
Commande "1" *-- "1..*" LigneCommande
LigneCommande "1" --> "1" Plat

```
