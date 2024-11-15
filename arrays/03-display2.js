/* Créez une fonction nommée displayArray2(tab) qui prend un tableau de chaînes de caractères en paramètre.
La fonction doit retourner une chaîne de caractères où chaque élément est séparé par un espace, mais le dernier élément doit être précédé de " et ". */

console.log(displayArray2(["Pomme", "Banane", "Abricot", "Cerise"]));
// Affichera : "Pomme Banane Abricot et Cerise"

function displayArray2(tab) {
  const dernierElement = tab.pop();
  tab.push("et");
  tab.push(dernierElement);
  return tab.join(" ");
}
