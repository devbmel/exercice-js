/* Créer une fonction qui prend une chaîne de caractères en entrée, la transforme en un tableau de mots, trie les mots par ordre alphabétique et retourne la chaîne triée. */

// Affichera : "chat chien oiseau poisson"

/* Modifiez la fonction pour ignorer la casse lors du tri (pour que le tri ne soit pas sensible à la casse).
Ajoutez la possibilité de trier dans l'ordre décroissant en passant un second argument à la fonction (sortWordsInString(chaine, false) pour l'ordre décroissant). */

function sortWordsInString(phrase, reversed = false) {
  let mots = phrase.split(" ");
  mots = mots.map((mot) => {
    return mot.toLowerCase();
  });
  mots.sort();
  if (reversed) {
    return mots.toReversed();
  }
  return mots;
}

console.log(sortWordsInString("je suis en train d'apprendre le JavaScript"));
// Affichera : "JavaScript apprendre d'apprendre en je le suis train"

console.log(sortWordsInString("chat chien oiseau poisson", true));
