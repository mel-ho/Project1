# current progress

### main game elements completed

**cards**
- had to create the card class and link the images to the correct card
- made use of the way i named the images to loop to find the images and insert it into each card.

**timer**
- initially did it without a variable then had to keep going into the code to change since i wanted it longer and shorter
- in the end added a number variable which might be useful when expending the game to have different countdown durations.

**gameboard**
- had a bit of trouble as the image and card container were two seperate elements and i needed to get the id when i clicked and i could only have one or the other since i was using target instead of currenttarget.
- also when i was trying to pick out the class "cards", it kept giving me undefined. figured cos it was returning and array.

### main gameplay completed

- cards had 4 properties that needed to be checked. initially had 4 different functions but managed to create a property array and a loop to reduce the lines of code.

### available sets completed

- initial loop gave too many sets as it was double counting (e.g. 1,3,8 / 1,8,3 should be 1 but it counted as 2)

### replace cards completed

- problems faced was deselecting cards and removing it from the array
- figuring out the css to select and deselect the card. had to create an active class that gets switched on and off to manage that

### countdown timer completed

- needed to stop timer when game stops instead of having the function keep running. created an interval variable that can be cleared

### game triggers

**start game**

- created function to load all elements of gameboard
- create button trigger that starts function

**end game**
- function completed
- had to figure out how to disable game board and to show score

### display elements

- display cards
- highlight selected cards
- hide gameboard when game not in play
- fixed css styling for game page, how to play page, high score page

### scoring page

- highscore display and updated completed. pull from player list
- highscore sorting completed. interate thru player score list and slice value in if larger.

## stretched goals

### create a 2 player mode

- will need to have 2 timers / 2 players
- switch between players.

### create challenge mode

- sets available will be 6 and you take the shortest time to find all of them. no replacement of cards.
- will need to filter out all 12 card sets with 6 availble sets
- will need to disable the replacecards
- timer will need to count up like now.
