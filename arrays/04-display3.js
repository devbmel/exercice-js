/* Créez une fonction nommée displayArray3(tab, useAnd) qui prend deux arguments :

    tab : un tableau de chaînes de caractères.
    useAnd : un booléen indiquant si " et " doit être utilisé avant le dernier élément. */

function displayArray2(tab) {
  const dernierElement = tab.pop();
  tab.push("et");
  tab.push(dernierElement);
  return tab.join(" ");
}

function displayArray3(tab, useAnd) {
  if (useAnd) {
    return displayArray2(tab);
  }
  return tab.join(" ");
}

console.log(displayArray3(["Pomme", "Banane", "Abricot", "Cerise"], false));
// Affichera : "Pomme Banane Abricot Cerise"

console.log(displayArray3(["Pomme", "Banane", "Abricot", "Cerise"], true));
// Affichera : "Pomme Banane Abricot et Cerise"
