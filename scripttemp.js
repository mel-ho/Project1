// function to check for matching combinations
function matchColor(inputArray) {
  if (
    inputArray[0].color === inputArray[1].color &&
    inputArray[0].color === inputArray[2].color
  ) {
    console.log("colors match");
    return true;
  } else if (
    inputArray[0].color !== inputArray[1].color &&
    inputArray[0].color !== inputArray[2].color &&
    inputArray[1].color !== inputArray[2].color
  ) {
    console.log("colors all unmatch");
    return true;
  } else console.log("no color pattern found");
  return false;
}

function matchNumber(inputArray) {
  if (
    inputArray[0].number === inputArray[1].number &&
    inputArray[0].number === inputArray[2].number
  ) {
    console.log("numbers match");
    return true;
  } else if (
    inputArray[0].number !== inputArray[1].number &&
    inputArray[0].number !== inputArray[2].number &&
    inputArray[1].number !== inputArray[2].number
  ) {
    console.log("numbers all unmatch");
    return true;
  } else console.log("no number pattern found");
  return false;
}

function matchShade(inputArray) {
  if (
    inputArray[0].shade === inputArray[1].shade &&
    inputArray[0].shade === inputArray[2].shade
  ) {
    console.log("shades match");
    return true;
  } else if (
    inputArray[0].shade !== inputArray[1].shade &&
    inputArray[0].shade !== inputArray[2].shade &&
    inputArray[1].shade !== inputArray[2].shade
  ) {
    console.log("shades all unmatch");
    return true;
  } else console.log("no shade pattern found");
  return false;
}

function matchShape(inputArray) {
  if (
    inputArray[0].shape === inputArray[1].shape &&
    inputArray[0].shape === inputArray[2].shape
  ) {
    console.log("shapes match");
    return true;
  } else if (
    inputArray[0].shape !== inputArray[1].shape &&
    inputArray[0].shape !== inputArray[2].shape &&
    inputArray[1].shape !== inputArray[2].shape
  ) {
    console.log("shapes all unmatch");
    return true;
  } else console.log("no shape pattern found");
  return false;
}

function matchCards(inputArray) {
  let count = 0;
  if (
    matchColor(inputArray) &&
    matchNumber(inputArray) &&
    matchShade(inputArray) &&
    matchShape(inputArray) === true
  ) {
    count++;
  }
}

console.log(matchColor(inputArray));
console.log(matchNumber(inputArray));
console.log(matchShade(inputArray));
console.log(matchShape(inputArray));
console.log(matchCards(inputArray));

// class GameBoard {
//   constructor() {
//     this.remainingDeck = [];
//     this.displayedCards = [];
//     this.setsOnTable;
//     this.timer = this.players = [];
//   }
//   startGame() {
//     let d = new Deck();
//     let p = new Player();
//     d.createDeck();
//     d.shuffleDeck();
//     d.selectCards(12);
//     console.log(d.selectedCards.length, d.deck.length);
//   }
//   calculateSets() {}
//   checkForMatch() {}
//   replaceCard(deck) {
//     deck.selectCards(3);
//     console.log(d.selectedCards.length, d.deck.length);
//   }
// }

// let g = new GameBoard();
// g.startGame();
// g.replaceCard();

// class Player {
//   constructor(name, score) {
//     this.playerName = name;
//     this.playerScore = score;
//   }
//   editPlayerName(name) {
//     this.playerName = name; // not sure if supposed to use the get name thing
//   }
// }
