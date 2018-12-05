var fs = require('fs');

fs.readFile('day5data.txt', 'utf8', function (err, contents) {

  part2(contents);

});

function part1(contents) {
  let arrayContents = contents.split('');

  for (let i = 1, l = arrayContents.length; i < l; i++) {
    // unchanged index
    let isUpperCase = arrayContents[i] === arrayContents[i].toUpperCase();

    if (isUpperCase) {

      // check right neighbor
      if (arrayContents[i + 1] === arrayContents[i].toLowerCase()) {
        arrayContents.splice(i, 2);
        i -= 1;
        l = arrayContents.length;
      }

      // check left neighbor
      else if (arrayContents[i - 1] === arrayContents[i].toLowerCase()) {
        arrayContents.splice(i - 1, 2);
        i -= 2;
        l = arrayContents.length;
      }
    }
    // lower case
    else {

      // check right neighbor
      if (arrayContents[i + 1] === arrayContents[i].toUpperCase()) {
        arrayContents.splice(i, 2);
        i -= 1;
        l = arrayContents.length;
      }

      // check left neighbor
      else if (arrayContents[i - 1] === arrayContents[i].toUpperCase()) {
        arrayContents.splice(i - 1, 2);
        i -= 2;
        l = arrayContents.length;
      }
    }
  }
  console.log(arrayContents.length);
  return arrayContents.length;
}

function part2(contents) {
  let shortestLength = Number.MAX_SAFE_INTEGER;

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  alphabet.forEach(letter => {
    // remove bother uppercase and lowercase of letter
    let testPolymer = contents.replace(new RegExp(letter, "ig"), ""); 
    let length = part1(testPolymer);

    length < shortestLength ? shortestLength = length : null

  })


  console.log(shortestLength);
  return shortestLength;
}