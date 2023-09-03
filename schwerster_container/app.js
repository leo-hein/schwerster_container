const nReadlines = require('n-readlines');
const broadbandLines = new nReadlines('/Users/hein/Projekte/Spielwiese/Algorithmik/BWINF/_41/schwerster_container/resources/container4.txt');

let line;
let lineNumber = 1;
const heavierContainersSet= new Set();

while (line = broadbandLines.next()) {
    heavierContainersSet.add(returnHeaviestOfPair(line.toString().split(" ")));
    // console.log(returnHeaviestOfPair(line.toString().split(" ")))
    lineNumber++;
}

const heavierContainersArray = [...heavierContainersSet];
const heaviestContainer = findHeaviestContainerOfAll(heavierContainersArray);
console.log("Der schwerste Container hat die Größe: " + heaviestContainer);

function returnHeaviestOfPair(arr) {
  return Math.max(parseInt(arr[0]), parseInt(arr[1]));
}

function findHeaviestContainerOfAll(arr) {
  let heaviest = 0;
  for (let i = 0; i < arr.length; i++) {
    heaviest = heaviest > arr[i] ? heaviest : arr[i];
  }
  return heaviest;
}