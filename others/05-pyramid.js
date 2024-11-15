/* En utilisant le langage JavaScript, créez une fonction pyramid(size) qui permet de dessiner une pyramide dans le terminal.

e

 */
function pyramide(hauteur) {
  for (let rang = 1; rang <= hauteur; rang++) {
    let ligne = "";

    for (let nbrEspace = 0; nbrEspace < hauteur; nbrEspace++) {
      ligne += " ";
    }
    for (let etoile = 0; etoile <= rang; etoile++) {
      ligne += "* ";
    }

    console.log(ligne);
  }
}

pyramide(3);
