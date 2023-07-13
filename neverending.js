// function to start the game in neverending mode
function startNeverendingGame() {
  const d = new Deck(); // initialize deck
  document.getElementById("main").innerHTML = gameboard;
  document.getElementById("startgameneverendingbutton").innerText =
    "Stop Continuous Mode";
  document.getElementById("name").innerText = playerName + " is playing";
  document.getElementById("score").innerText = "Sets Found: 0";

  d.createDeck();
  d.shuffleDeck();
  d.selectStartingCards();
  let playerMode = "Continuous";
  checkSets(d.displayDeck);

  // code to select 3 cards

  const select = [];
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
          e.currentTarget.classList.remove("active");
          return select;
        }
      }
      // search and add card details into select array
      for (let i = 0; i < d.displayDeck.length; i++) {
        if (elementId === "card" + (i + 1)) {
          const card = d.displayDeck[i];
          if (select.length < 2) {
            select.push([elementId, card]);
            e.currentTarget.classList.add("active");

            return select;
          } else if (select.length === 2) {
            select.push([elementId, card]);
            e.currentTarget.classList.add("active");
            if (matchProperty(select, properties) == false) {
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
  return playerMode;
}

function endNeverendingGame() {
  playerMode = "Continuous";
  playerScore = document.getElementById("score").innerText.slice(12);
  document.getElementById("name").innerText =
    "Game is Over.\n " +
    playerName +
    " found " +
    document.getElementById("score").innerText.slice(12) +
    " set(s).";

  document.getElementById("main").innerHTML = "";
  document.getElementById("startgameneverendingbutton").innerText =
    "Continuous Mode";
  document.getElementById("countdowntimer").innerText = "";
  document.getElementById("numofsets").innerText = "";
  document.getElementById("score").innerText = "";
  document.getElementById("remainingcards").innerText = "";

  for (i = 0; i < playerList.length; i++) {
    if (playerList[i][1] <= playerScore) {
      playerList.splice(i, 0, [playerName, playerScore]);
      break;
    } else {
      playerList.push([playerName, playerScore, playerMode]);
      break;
    }
  }

  return;
}

// start game page
let startGameNeverendingButton = document.getElementById(
  "startgameneverendingbutton"
);
startGameNeverendingButton.onclick = function () {
  if (
    document.getElementById("startgameneverendingbutton").innerText ===
    "Continuous Mode"
  ) {
    playerName = prompt("Please enter your name", "Anonymous");
    if (playerName === null || playerName === "") {
      playerName = "Anonymous";
    }
    startNeverendingGame();
  } else {
    endNeverendingGame();
  }
};
