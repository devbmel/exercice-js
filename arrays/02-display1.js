/*    Créez une fonction nommée displayArray(tab) qui prend un tableau de chaînes de caractères en paramètre.
    La fonction doit retourner une chaîne de caractères où chaque élément du tableau est séparé par un espace.
     */
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"]));
// Affichera : "Pomme Banane Abricot Cerise"

function displayArray(tab) {
  return tab.join(" ");
}
