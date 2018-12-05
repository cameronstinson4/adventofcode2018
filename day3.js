var fs = require('fs');

fs.readFile('day3data.txt', 'utf8', function (err, contents) {

  part1(contents)

});

function part1(contents) {
  let arrayContents = contents.split("\n");

  let gridOfClaims = [];
  let sumInchesClaimed = 0;
  let overlapIds = [];
  let ids = [];

  for (let i = 0; i < arrayContents.length; i++) {
    let claim = parseClaim(arrayContents[i])
    ids.push(claim.id)

    // claimFabric(gridOfClaims, claim)
    for (let j = claim.startX; j < claim.startX + claim.xDimension; j++) {
      for (let k = claim.startY; k < claim.startY + claim.yDimension; k++) {

        // if array doesn't exist
        if (!gridOfClaims[j]) {
          gridOfClaims[j] = [];
        }

        // if array exists
        if (gridOfClaims[j][k]) {
          if (gridOfClaims[j][k].length === 1) {
            sumInchesClaimed++;
          }

          gridOfClaims[j][k].push(claim.id);

          gridOfClaims[j][k].forEach(element => {
            overlapIds.push(element);
          });
        }
        else {
          gridOfClaims[j][k] = [claim.id];
        }
      }
    }
  }

  console.log(sumInchesClaimed);
  arrayDiff(overlapIds, ids);
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

// removes all elements in toRemoveFromArray that exist in toRemoveArray
function arrayDiff(toRemoveArray, toRemoveFromArray) {

  let result = toRemoveFromArray.filter(element => !toRemoveArray.includes(element))
  console.log(result);
  
  return result;
}
