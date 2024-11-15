// Crée une fonction appelée
// boiteASurprise qui accepte un nombre indéfini d'arguments (utilise ... pour les
// paramètres rest) et renvoie la somme de tous les arguments, mais uniquement
// les nombres pairs. Si l'argument n'est pas un nombre pair, il doit être ignoré.
// Déclare la fonction boiteASurprise qui accepte un nombre variable
// d'arguments avec ... .
// Parcours les arguments, et si c'est un nombre pair, ajoute-le à la somme.
// Retourne la somme finale et affiche-la.

function boiteASurprise(...args) {
  let result = 0;

  for (const arg of args) {
    if (typeof arg === "number" && arg % 2 === 0) {
      result += arg;
    }
  }

  return result;
}

console.log(boiteASurprise(1, 2, "toto", 6));
