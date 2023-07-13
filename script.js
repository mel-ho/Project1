// create player / player list
const playerList = [["Mel", 8]];
let playerName = "Anonymous";
let playerScore = 0;

// create timer
const timer = document.getElementById("countdowntimer");
function timerStart(counter = 60) {
  timer.innerHTML = "Countdown Timer: " + counter + " seconds left";
  let interval = setInterval(() => {
    timer.innerHTML = "Countdown Timer: " + (counter - 1) + " seconds left";
    if (document.getElementById("startgamebutton").innerText === "Start Game") {
      // the game is stopped before timer is up
      timer.innerHTML = "";
      clearInterval(interval);
      document.getElementById("name").innerText = "";
    } else if (counter === 1) {
      // the timer has reaached zero
      timer.innerHTML = "Times Up";
      clearInterval(interval);
      gameEnds();
    } else {
      counter--;
    }
  }, 1000);
}

// card properties
const properties = ["color", "number", "shade", "shape"];
const colors = ["red", "green", "purple"];
const numbers = ["1", "2", "3"];
const shades = ["solid", "striped", "open"];
const shapes = ["oval", "squiggle", "diamond"];

// create Player class
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

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
    document.getElementById("remainingcards").innerText =
      "Remaining Cards: " + this.deck.length;
  }
}

// function to display cards on the deck. used after selecting the starting cards
function displayCard(displayDeck) {
  for (let i = 0; i < displayDeck.length; i++) {
    x = "card" + (i + 1);
    //document.getElementById(x).src = displayDeck[i].image;
    document.getElementById(x).innerHTML = `
    <img src="${displayDeck[i].image}" />`;
  }
}

// function to replace 3 cards once match has been found
function replaceThreeCards(select, deck) {
  let newCards = [];
  newCards[0] = deck.deck.pop();
  newCards[1] = deck.deck.pop();
  newCards[2] = deck.deck.pop();

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
      document.getElementById("numofsets").innerText =
        "Sets Available: " + numOfSets;
    }
  }
  // haven't tested. if no more sets to redeal
  if (numOfSets === 0) {
    d.selectStartingCards();
  }
}

// function to start the game
function startGame(time) {
  const d = new Deck(); // initialize deck
  document.getElementById("main").innerHTML = gameboard;
  document.getElementById("startgamebutton").innerText = "Stop Game";
  console.log(playerName);
  document.getElementById("name").innerText = playerName + " is playing";
  document.getElementById("score").innerText = "Sets Found: 0";

  d.createDeck();
  d.shuffleDeck();
  d.selectStartingCards();
  timerStart(time);

  checkSets(d.displayDeck);

  // code to select 3 cards

  const select = [];
  let match = false;
  let playerScore = 0;

  // getting all the elements with the card class and returning it in an array
  const cardDiv = document.getElementsByClassName("card");

  Array.from(cardDiv).forEach((e) =>
    e.addEventListener("click", (e) => {
      let elementId = e.currentTarget.id;
      // to deselect if already in select array
      for (let j = 0; j < select.length; j++) {
        if (elementId === select[j][0]) {
          select.splice(j, 1);
          console.log(select);
          console.log(elementId);
          e.currentTarget.classList.remove("active");
          return select;
        }
      }
      // search and add card details into select array
      for (let i = 0; i < d.displayDeck.length; i++) {
        if (elementId === "card" + (i + 1)) {
          const card = d.displayDeck[i];
          console.log(select.length);
          if (select.length < 2) {
            select.push([elementId, card]);
            e.currentTarget.classList.add("active");
            console.log(select);
            return select;
          } else if (select.length === 2) {
            select.push([elementId, card]);
            e.currentTarget.classList.add("active");
            if (matchProperty(select, properties) == false) {
              console.log("cards dont match");
              console.log(select);
              return select;
            } else {
              // number of sets increase by 1
              playerScore++;
              // replace 3 selected cards
              replaceThreeCards(select, d);
              // to remove active status
              let activeDiv = document.getElementsByClassName("active");
              Array.from(activeDiv).forEach((e) => {
                e.classList.remove("active");
              });

              checkSets(d.displayDeck);
              document.getElementById("score").innerText =
                "Sets Found: " + playerScore;
              document.getElementById("remainingcards").innerText =
                "Remaining Cards: " + d.deck.length;
            }
          }
        }
      }
    })
  );
}

function gameEnds() {
  playerScore = document.getElementById("score").innerText.slice(12);
  document.getElementById("name").innerText =
    "Game is Over.\n " +
    playerName +
    " found " +
    document.getElementById("score").innerText.slice(12) +
    " set(s).";

  document.getElementById("main").innerHTML = "";
  document.getElementById("startgamebutton").innerText = "Start Game";
  document.getElementById("countdowntimer").innerText = "";
  document.getElementById("numofsets").innerText = "";
  document.getElementById("score").innerText = "";
  document.getElementById("remainingcards").innerText = "";

  playerList.push([playerName, playerScore]);

  return;
}

// high score page
let highScoreButton = document.getElementById("highscorebutton");
highScoreButton.onclick = function () {
  document.getElementById("startgamebutton").innerText = "Start Game";
  document.getElementById("countdowntimer").innerText = "";
  document.getElementById("numofsets").innerText = "";
  document.getElementById("score").innerText = "";
  document.getElementById("remainingcards").innerText = "";
  document.getElementById("name").innerText = "";

  let playerListPrint = ``;
  for (i = 0; i < playerList.length; i++) {
    console.log(playerListPrint);
    playerListPrint =
      playerListPrint +
      `<tr><td>${playerList[i][0]}</td><td>${playerList[i][1]}</td></tr>`;
  }

  document.getElementById(
    "main"
  ).innerHTML = `<table><tr><th>Player Name</th><th>Score</th></tr>${playerListPrint}</table>`;
};

// how to play page
let howToPlayButton = document.getElementById("howtoplay");
howToPlayButton.onclick = function () {
  document.getElementById("startgamebutton").innerText = "Start Game";
  document.getElementById("countdowntimer").innerText = "";
  document.getElementById("numofsets").innerText = "";
  document.getElementById("score").innerText = "";
  document.getElementById("remainingcards").innerText = "";
  document.getElementById("main").innerHTML = howToPlay;
  document.getElementById("name").innerText = "";
};

// start game page
let startGameButton = document.getElementById("startgamebutton");
startGameButton.onclick = function () {
  if (document.getElementById("startgamebutton").innerText === "Start Game") {
    playerName = prompt("Please enter your name", "Anonymous");
    if (playerName === null || playerName === "") {
      playerName = "Anonymous";
    }
    startGame(30);
  } else {
    gameEnds();
  }
};
