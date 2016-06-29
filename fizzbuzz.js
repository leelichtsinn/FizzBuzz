for (var n = 0; n <= 100; n++) {
  if ((n % 3 === 0) && (n % 5 === 0)) { // define all numbers divisible by 3 & 5
    console.log('fizzbuzz');
  } else if (n % 3 === 0) { // define numbers only divisible by 3
    console.log('fizz');
  } else if (n % 5 === 0) { // define numbers only divisible by 5
    console.log('buzz');
  } else {
    console.log(n);
  }
console.log(n);
}