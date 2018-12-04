var fs = require('fs');

fs.readFile('day2data.txt', 'utf8', function (err, contents) {

  part1(contents)
  part2(contents)

});

function part1(contents) {
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
  console.log(numDouble, " ", numTriple, " ", numDouble * numTriple)
}

function part2(contents) {
  let arrayContents = contents.split("\n");

  while (arrayContents.length > 0) {
    let current = arrayContents.pop().split("")

    arrayContents.map(string => {
      let numDif = 0;
      let seperatedString = string.split("")
      for (let i = 0; i < current.length; i++) {
        if (current[i] !== seperatedString[i]) {
          numDif ++;
          seperatedString[i] = null
        }
      }
      if (numDif <= 1) {
        console.log(seperatedString.join(''));
      }
    })
  }
}