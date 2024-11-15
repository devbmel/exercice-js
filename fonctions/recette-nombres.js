// 1. Déclare la fonction modifierNombre avec trois paramètres : nombre , addition , et
// multiplication , en donnant des valeurs par défaut à addition et
// multiplication .
// 2. Applique l’addition au nombre, puis multiplie le résultat par le facteur de
// multiplication.
// 3. Retourne le résultat et affiche-le.

function modifierNombre(nombre, addition = 3, multiplication = 4) {
  return (nombre + addition) * multiplication;
}

console.log(modifierNombre(2));
