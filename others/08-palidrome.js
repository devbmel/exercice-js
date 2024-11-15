/* L'objectif de cet exercice est de vérifier si un mot est un palindrome, c'est-à-dire un mot qui se lit de la même manière de gauche à droite que de droite à gauche (par exemple, "radar", "level").
 */

function estPalindrome(mot) {
  let motInverse = "";
  mot = mot.toLowerCase();

  for (let index = mot.length - 1; index >= 0; index--) {
    motInverse += mot[index];
  }

  return mot === motInverse;
}

console.log(estPalindrome("Hannah")); // true
console.log(estPalindrome("level")); // true
console.log(estPalindrome("bonjour")); // false
