/* Afficher les nombres de 1 à 20 et  à remplacer tout nombre divisible par trois par le mot « fizz », et tout nombre divisible par cinq par le mot « buzz », et tout nombre divisible par trois et cinq par le mot « fizzbuzz » */
for (let number = 1; number <= 20; number++) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log("fizzbuz");
  } else if (number % 5 === 0) {
    console.log("buzz");
  } else if (number % 3 === 0) {
    console.log("fizz");
  }
  console.log(number);
}
