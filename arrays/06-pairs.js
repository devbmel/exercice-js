/* Essayez d'écrire un programme qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs, puis multipliez chaque nombre restant par 2. Utilisez filter() et map(). */

// résultats attendus [4, 8, 12, 16]
let nombres = [1, 2, 3, 4, 5, 6, 7, 8];

let result = nombres.filter((nombre) => {
  return nombre % 2 === 0;
});
result = result.map((nombrePairs) => {
  return nombrePairs * 2;
});

console.log(result);
