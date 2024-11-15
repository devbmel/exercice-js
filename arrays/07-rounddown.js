/* Créez une fonction nommée roundDownArray(tab) qui prend en paramètre un tableau de nombres décimaux. */

// Affichera : [3, 8, 2, 5]

function roundDownArray(tab) {
  return tab.map((number) => {
    return Math.floor(number);
  });
}

console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]));
