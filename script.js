// card properties
const colors = ["red", "green", "purple"];
const numbers = ["1", "2", "3"];
const shades = ["solid", "striped", "open"];
const shapes = ["oval", "squiggle", "diamond"];

// create Card class
class Card {
  constructor(color, number, shade, shape, image) {
    this.color = color;
    this.number = number;
    this.shade = shade;
    this.shape = shape;
    this.image = image;
  }
}

// let testCard = new Card("red", 2, "solid", "diamond");
// console.log(testCard);

// create Deck class
class Deck {
  constructor() {
    this.deck = [];
    this.usedDeck = [];
    this.displayDeck = [];
  }
  //function to create new Deck
  createDeck() {
    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        for (let k = 0; k < shades.length; k++) {
          for (let l = 0; l < shapes.length; l++) {
            this.deck.push(
              new Card(
                colors[i],
                numbers[j],
                shades[k],
                shapes[l],
                "IMAGE/" +
                  colors[i] +
                  numbers[j] +
                  shades[k] +
                  shapes[l] +
                  ".png"
              )
            );
          }
        }
      }
    }
  }
  // function to shuffle deck
  shuffleDeck() {
    for (let i = 0; i < this.deck.length; i++) {
      let shuffle = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[i];
      this.deck[i] = this.deck[shuffle];
      this.deck[shuffle] = temp;
    }
  }
  // select a number of cards from a deck
  selectStartingCards() {
    for (let i = 0; i < 12; i++) {
      this.displayDeck[i] = this.deck.pop();
    }
    displayCard(this.displayDeck);
  }
}

function displayCard(displayDeck) {
  for (let i = 0; i < displayDeck.length; i++) {
    x = "card" + (i + 1);
    document.getElementById(x).src = displayDeck[i].image;
  }
}

const d = new Deck(); // initialize deck

d.createDeck();
d.shuffleDeck();
d.selectStartingCards();
console.log(d.deck.length, d.displayDeck.length, d.usedDeck.length);

const select = [];

document.addEventListener("click", (e) => {
  // get elementID of selected card
  let elementId = e.target.id;
  // to deselect if already in select array
  for (let j = 0; j < select.length; j++) {
    if (elementId === select[j][0]) {
      select.splice(j, 1);
      console.log(select);
      return select;
    }
  }
  // search and add card details into select array
  for (let i = 0; i < d.displayDeck.length; i++) {
    if (elementId === "card" + (i + 1)) {
      card = d.displayDeck[i];
      if (select.length < 3) {
        select.push([elementId, card]);
        console.log(select);
        return select;
      } else {
        console.log("check for match");
      }
    }
  }
});

// function to identify all possible sets in selected Deck
function checkSets(deck) {
  for (let i = 0; i < deck.length - 2; i++) {}
}

// function to choose set and store card values
function chooseCards() {}

// function to match chosen card set to identified sets
function checkSelectedSets() {}

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
