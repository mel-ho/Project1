// create timer class

class Timer {
  constructor({
    seconds = 0,
    minutes = 0,
    timerSeconds = 0,
    timerMinutes = 0,
    interval = null,
    counter = false,
  }) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.timerSeconds = timerSeconds;
    this.timerMinutes = timerMinutes;
    this.interval = interval;
    this.counter = counter;
  }

  runTimer() {
    this.seconds++;

    if (this.seconds / 60 === 1) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.seconds < 10) {
      this.timerSeconds = "0" + this.seconds.toString();
    } else {
      this.timerSeconds = this.seconds;
    }
    document.getElementById("timer").innerHTML =
      this.timerMinutes + ":" + this.timerSeconds;
  }

  startTimer() {
    if (this.counter === false) {
      this.interval = window.setInterval(() => this.runTimer(), 1000);
      this.counter = true;
    } else {
      window.clearInterval(this.interval);
      this.counter = false;
    }
  }

  resetTimer() {
    widown.clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
    document.getElementById("timer").innterHTML = "0:00";
    document.getElementById("startTimer").innerHTML = "START";
  }
}

// card properties
const properties = ["color", "number", "shade", "shape"];
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
    document.getElementById("remainingcards").innerText = this.deck.length;
  }
}

// function to display cards on the deck. used after selecting the starting cards
function displayCard(displayDeck) {
  for (let i = 0; i < displayDeck.length; i++) {
    x = "card" + (i + 1);
    document.getElementById(x).src = displayDeck[i].image;
  }
}

// function to replace 3 cards once match has been found
function replaceThreeCards(select, deck) {
  let newCards = [];
  newCards[0] = deck.deck.pop();
  newCards[1] = deck.deck.pop();
  newCards[2] = deck.deck.pop();
  console.log(newCards);

  console.log(select);

  card1Idx = select[0][0].slice(4) - 1;
  card2Idx = select[1][0].slice(4) - 1;
  card3Idx = select[2][0].slice(4) - 1;
  console.log(card1Idx, card2Idx, card3Idx);

  deck.displayDeck[card1Idx] = newCards[0];
  deck.displayDeck[card2Idx] = newCards[1];
  deck.displayDeck[card3Idx] = newCards[2];

  select.splice(0, 3);

  displayCard(deck.displayDeck);
}

// funtion to check if a set is made and satsify all conditions for all properties
function matchProperty(inputArray, properties) {
  let counter = 0;
  for (let i = 0; i < properties.length; i++) {
    if (
      inputArray[0][1][properties[i]] === inputArray[1][1][properties[i]] &&
      inputArray[0][1][properties[i]] === inputArray[2][1][properties[i]]
    ) {
      //console.log(properties[i] + ": match");
      counter += 1;
    } else if (
      inputArray[0][1][properties[i]] !== inputArray[1][1][properties[i]] &&
      inputArray[0][1][properties[i]] !== inputArray[2][1][properties[i]] &&
      inputArray[1][1][properties[i]] !== inputArray[2][1][properties[i]]
    ) {
      //console.log(properties[i] + ": all unmatch");
      counter += 1;
    } else {
      //console.log(properties[i] + ": no pattern found");
    }
  }
  //console.log(counter !== 0 && counter % 4 === 0);

  return counter !== 0 && counter % 4 === 0;
}

// function to identify all possible sets in selected Deck. needed so that if no available sets then get to select 3 new cards.
function checkSets(anyDeck) {
  // create all the different 3 card combis
  let setOfSets = [];
  let set = [];
  let numOfSets = 0;

  for (x = 0; x < anyDeck.length - 2; x++) {
    for (y = x + 1; y < anyDeck.length - 1; y++) {
      for (z = y + 1; z < anyDeck.length; z++) {
        set = [
          [x, anyDeck[x]],
          [y, anyDeck[y]],
          [z, anyDeck[z]],
        ];
        setOfSets.push(set);
      }
    }
  }

  for (i = 0; i < setOfSets.length; i++) {
    let status = matchProperty(setOfSets[i], properties);
    if (status === true) {
      console.log(setOfSets[i]);
      numOfSets++;
      document.getElementById("numofsets").innerText = numOfSets;
    }
  }

  console.log(numOfSets);
}

// function to start the game
function startGame() {
  const d = new Deck(); // initialize deck
  const timer = new Timer({});

  d.createDeck();
  d.shuffleDeck();
  d.selectStartingCards();
  timer.startTimer();

  checkSets(d.displayDeck);

  // code to select 3 cards

  const select = [];
  let match = false;
  let playerScore = 0;

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
        const card = d.displayDeck[i];
        if (select.length < 2) {
          select.push([elementId, card]);
          console.log(select);
          return select;
        } else {
          select.push([elementId, card]);
          console.log(select);
          if (matchProperty(select, properties) == false) {
            console.log("cards dontmatch");
          } else {
            // number of sets increase by 1
            playerScore++;
            // replace 3 selected cards
            replaceThreeCards(select, d);
            checkSets(d.displayDeck);
            document.getElementById("score").innerText = playerScore;
            document.getElementById("remainingcards").innerText = d.deck.length;
          }
        }
      }
    }
  });
}

// incomplete
function gameEnds() {
  // when timer reaches 0
  // save score
}

startGame();

/*
current progress
- main gameplay is complete
- - availble sets completed
- - replace cards completed
still to be done
- need to set countdown timer
- need to have start game trigger
- need to have end game trigger


stretched goals
- create game where the sets available will be 6 and you take the shortest time to find all of them. no replacement of cards.
- - will need to disable the replacecards
- - timer will need to count up like now.
*/
