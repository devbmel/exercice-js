// Crée une fonction récursive appelée
// compterDe qui prend un nombre n et compte de n à 1 en affichant chaque
// nombre à chaque étape. Par exemple, si n est 5, la fonction doit afficher 5, 4,
// 3, 2, 1.
// Instructions :
// 1. Déclare la fonction compterDe qui prend un paramètre n .
// 2. Si n est supérieur à 0, affiche n et appelle la fonction avec n-1
// (récursion).
// 3. Si n est égal à 0, arrête l’affichage

function compterDe(n) {
  if (n > 0) {
    console.log(n);
    return compterDe(n - 1);
  } else return;
}

compterDe(6);
