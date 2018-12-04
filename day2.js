var fs = require('fs');

fs.readFile('data34.txt', 'utf8', function (err, contents) {
  let arrayContents = contents.split("\n");

  let numDouble = 0;
  let numTriple = 0;

  for (let i = 0; i < arrayContents.length; i++) {
    let characters = arrayContents[i].split("");
    let counts = {};

    for (let j = 0; j < characters.length; j++) {
      counts[characters[j]] ? counts[characters[j]] += 1 : counts[characters[j]] = 1;
    }

    let hasDouble = false;
    let hasTriple = false;

    for (key in counts) {
      counts[key] === 2 ? hasDouble = true : null;
      counts[key] === 3 ? hasTriple = true : null;
    }

    hasDouble ? numDouble++ : null;
    hasTriple ? numTriple++ : null;
  }
  console.log(numDouble, " ", numTriple, " ", numDouble*numTriple)
});

