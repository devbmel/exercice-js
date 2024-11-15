/* Facile  */
/* --------------------------------------------- */

/* 1. Créez un tableau nommé animaux contenant les éléments suivants : "chien", "chat", "lapin". et affichez le  */
let animaux = ["chien", "chat", "lapin"];
console.log(animaux);
/* 2.Créez un tableau nommé couleurs contenant "rouge", "vert", "bleu".
Affichez le deuxième élément du tableau. */
let couleurs = ["rouge", "vert", "bleu"];
console.log(couleurs[1]);
/* 3. Remplacez le premier élément du tableau animaux par "hamster". */
animaux[0] = "hamster";
console.log(animaux);
/* Intermédiaire */
/* ----------------------------------------------------*/

/* 4. Ajoutez "perroquet" à la fin du tableau animaux.
Supprimez le premier élément du tableau animaux. */
animaux.push("perroquet");
console.log(animaux);
/* 5. Vérifiez si "chat" est présent dans le tableau animaux et affichez true ou false dans la console. */
console.log(animaux.includes("chat"));
/* 6.Créez un tableau nommé nombres contenant les chiffres de 1 à 10.
Affichez le nombre total d'éléments dans le tableau.*/
let nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nombre.length);
/* Difficiles */

/* Créez un tableau valeurs contenant des éléments dupliqués.
Utilisez filter() et indexOf() pour créer un tableau unique qui ne contient que des éléments uniques. */
let ages = [1, 2, 1, 14, 15, 14, 3, 2, 14];
let agesUniques = ages.filter((valeur, index) => {
  return ages.indexOf(valeur) === index;
});

console.log(agesUniques);
