/* 
D'accord, voici une reformulation de l'énoncé en fonction de la solution que tu souhaites obtenir.
Exercice 2 : Jeu de devinettes avec une solution aléatoire

Objectif : Utiliser une boucle pour créer un jeu où l'utilisateur doit deviner un nombre généré aléatoirement.

Instructions :

    - Créez une fonction qui prend en paramètre un nombre correct à deviner.

    - À chaque tour de boucle, générez un nombre aléatoire entre 1 et 100.

    - Affichez le nombre généré à chaque essai avec un message qui indique quel essai cela représente.
    
    - La boucle doit continuer jusqu'à ce que le nombre généré corresponde au nombre à deviner.
    
    - Affichez un message final indiquant combien d'essais l'utilisateur a fait pour trouver le bon nombre.
*/
function nbreMagique(nbreCorrect) {
  let essais = 0;
  let randomNumber = 0;

  while (nbreCorrect !== randomNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    essais++;
    console.log(
      `Le nombre generé est: ${randomNumber}. Ceci est le ${essais} essais.`
    );
  }
  console.log(`Bravo vous avez reussi en ${essais}.`);
}

nbreMagique(2);
