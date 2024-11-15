/* Créer une fonction qui génère la table de multiplication d'un nombre jusqu'à 10 */
function tableMultiplication(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

tableMultiplication(3);
