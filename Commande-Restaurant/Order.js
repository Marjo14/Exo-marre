"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, status) {
        this.id = id;
        this.status = status;
        this.lines = [];
        console.log(`👉 Nouvelle commande créée : ID=${id}, status=${status}`);
    }
    // Added one more line ( dish + quantity)
    addLine(line) {
        this.lines.push(line);
        console.log(`➕ Ligne ajoutée : ${line.quantity} x ${line.dish.name}`);
    }
    // Calculated final total of the order
    calculateTotal() {
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
exports.Order = Order;
