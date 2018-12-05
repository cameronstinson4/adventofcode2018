var fs = require('fs');

fs.readFile('day3data.txt', 'utf8', function (err, contents) {

  part1(contents)

});

function part1(contents) {
  let arrayContents = contents.split("\n");

  let gridOfClaims = []
  let sumInchesClaimed = 0;

  for (let i = 0; i < arrayContents.length; i++) {
    let claim = parseClaim(arrayContents[i])

    // claimFabric(gridOfClaims, claim)
    for (let j = claim.startX; j < claim.startX + claim.xDimension; j++) {
      for (let k = claim.startY; k < claim.startY + claim.yDimension; k++) {
        if (!gridOfClaims[j]) {
          gridOfClaims[j] = [];
          gridOfClaims[j][k] = 1;
        }
        else if (gridOfClaims[j][k]) {
          if (gridOfClaims[j][k] === 1) {
            sumInchesClaimed++;
          }
          gridOfClaims[j][k]++;
        }
        else {
          gridOfClaims[j][k] = 1;
        }
      }
    }
  }

  console.log(sumInchesClaimed)
  print(gridOfClaims)
}

function parseClaim(claim) {

  claim = claim.split(" ");

  let id = claim[0].replace("#", "");
  let coords = claim[2].replace(":", "").split(",");
  let dimensions = claim[3].split("x");

  let result = {};
  result['id'] = id
  result['startX'] = Number(coords[0]);
  result['startY'] = Number(coords[1]);
  result['xDimension'] = Number(dimensions[0]);
  result['yDimension'] = Number(dimensions[1]);

  return result;
}

function print(ndarray) {
  fs.writeFile('hah.txt', JSON.stringify(ndarray), () => {
    console.log('write complete')
  })
}