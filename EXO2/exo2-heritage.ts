// ----------- EXO 2 : HÉRITAGE ------------

// Classe de base commune
export abstract class Ex2Animal {
  constructor(public name: string, public species: string) {}

  // Méthode que chaque animal devra implémenter
  abstract makeSound(): void;
}

// ----------- Sous-classes ------------

export class Ex2Frog extends Ex2Animal {
  makeSound(): void {
    console.log(`${this.name} (grenouille) : "Crooooâa !"`);
  }
}

export class Ex2Fish extends Ex2Animal {
  makeSound(): void {
    console.log(`${this.name} (poisson) : "..." (bruit de bulles)`);
  }
}

export class Ex2Dragonfly extends Ex2Animal {
  makeSound(): void {
    console.log(`${this.name} (libellule) : "Bzzz bzzz !"`);
  }
}

export class Ex2Mosquito extends Ex2Animal {
  makeSound(): void {
    console.log(`${this.name} (moustique) : "Bzzzz !"`);
  }

  sting(target: Ex2Animal): void {
    console.log(`${this.name} pique ${target.name} !`);
  }
}

export class Ex2Snail extends Ex2Animal {
  makeSound(): void {
    console.log(`${this.name} (escargot) : "..." (silence total)`);
  }
}

// --------------------------------------------
// TEST DU POLYMORPHISME
// --------------------------------------------

const animals: Ex2Animal[] = [
  new Ex2Frog("René", "frog"),
  new Ex2Fish("Nemo", "fish"),
  new Ex2Dragonfly("Blue", "dragonfly"),
  new Ex2Mosquito("Zzz", "mosquito"),
  new Ex2Snail("Gary", "snail"),
];

for (const animal of animals) {
  animal.makeSound();
}

// Test spécial : moustique pique la grenouille
const mosquito = new Ex2Mosquito("Zzz", "mosquito");
const frog = new Ex2Frog("René", "frog");
mosquito.sting(frog);
