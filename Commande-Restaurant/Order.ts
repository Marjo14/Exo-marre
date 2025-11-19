import { OrderLine } from "./orderLine";

export class Order {
  public id: number; //uniq id from the order
  public status: string; // Order status if its "pending", "devlivered", "ready", "in_preparation"
  public lines: OrderLine[]; // How many line for 1 order

  constructor(id: number, status: string) {
    this.id = id;
    this.status = status;
    this.lines = [];  

    console.log(`👉 Nouvelle commande créée : ID=${id}, status=${status}`)
  }

// Added one more line ( dish + quantity)
  addLine(line: OrderLine): void {
    this.lines.push(line);
    console.log(`➕ Ligne ajoutée : ${line.quantity} x ${line.dish.name}`);
}

// Calculated final total of the order
calculateTotal(): number {
    let total = 0;

    console.log("\n🧮 Calcul du total de la commande…");

    for (const line of this.lines) {
      const lineTotal = line.getLineTotal(); 
      console.log(`  - ${line.quantity} x ${line.dish.name} = ${lineTotal} €`);
      total += line.getLineTotal();
    }
     console.log(`💰 Total final : ${total} €`);
    return total;
  }

}
