for (var i = 0; i <= 20; i++) {
  var result = ' ';
  if (result % 3 === 0) {
    result += 'Fizz';
    if (result % 5 === 0) {
      result += 'Buzz';
    }
  console.log(result || i);
  } 
}