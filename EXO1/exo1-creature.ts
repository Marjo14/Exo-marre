export class Creature1 {
  private energy: number = 100;

  constructor(public name: string, public species: string) {}

  // Réduit l'énergie de 10
  move(): void {
    this.energy = Math.max(0, this.energy - 10);
  }

  // Augmente l'énergie de 20 (max 100)
  rest(): void {
    this.energy = Math.min(100, this.energy + 20);
  }

  // Retourne l'énergie actuelle
  getEnergy(): number {
    return this.energy;
  }
}

// --- Test ---
const grenouille = new Creature1("René", "grenouille");
grenouille.move();
console.log(grenouille.getEnergy()); 
