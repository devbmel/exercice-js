/* Créer une fonction qui compte le nombre de voyelles dans une phrase.

Resultat attendu :
Le nombre de voyelles dans "Bonjour tout le monde" est : 8
*/

function compteurVoyelles(phrase) {
  let nbrVoyelles = 0;
  const VOYELLES = "aeiouy";

  for (const lettre of phrase) {
    if (VOYELLES.includes(lettre)) {
      nbrVoyelles++;
    }
  }

  return `Le nombre de voyelles dans "${phrase}" est: ${nbrVoyelles}`;
}

console.log(compteurVoyelles("Salut ca va?"));
