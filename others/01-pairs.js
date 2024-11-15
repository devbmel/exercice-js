/* Utilisez une boucle while pour parcourir les nombres de 0 à 20.
Affichez uniquement les nombres pairs  */

let number = 0;

while (number <= 20) {
  if (number % 2 === 0) {
    console.log(`${number} est pair`);
  }
  number++;
}
