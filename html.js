const gameboard = `
<div class="cards">
<div class="card" id="card1">
  <img id="carda" src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card2">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card3">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card4">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card5">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card6">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card7">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card8">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card9">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card10">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card11">
  <img src="Image/SETlogosmall.JPG" />
</div>
<div class="card" id="card12">
  <img src="Image/SETlogosmall.JPG" />
</div>
</div>
`;

const howToPlay = `
<div class = "rules">

<h2>Objective of the Game</h2>
<p>
  The objective of the game is to identify a SET of 3 cards from 12 cards placed
  face up on the table. Each card has four properties which can vary as follows.
</p>
<h2>Card Properties</h2>
<h3>Shape</h3>
<div class = "imageblocks"><img src="Image/red1soliddiamond.png" />
<img src="Image/red1solidoval.png" />
<img src="Image/red1solidsquiggle.png" /></div>
<h3>Color</h3>
<div class = "imageblocks"><img src="Image/red1soliddiamond.png" />
<img src="Image/green1soliddiamond.png" />
<img src="Image/purple1soliddiamond.png" /></div>
<h3>Shade</h3>
<div class = "imageblocks"><img src="Image/red1soliddiamond.png" />
<img src="Image/red1stripeddiamond.png" />
<img src="Image/red1opendiamond.png" /></div>
<h3>Number</h3>
<div class = "imageblocks"><img src="Image/red1openoval.png" />
<img src="Image/red2openoval.png" />
<img src="Image/red3openoval.png" />
</div>
<h2>What is a Set?</h2>
<p>A SET consists of 3 cards in which each of the card's properties are all the same
  on each card, or are all different on each card.\n</p>
<p>All the properties must separately satisfy this rule.</p>
<h3>Example 1:</h3>
<div class = "imageblocks"><img src="Image/red1soliddiamond.png" />
<img src="Image/green2openoval.png" />
<img src="Image/purple3stripedsquiggle.png" />
</div>
<h3>Example 2:</h3>
<p> The SET above simliar colors, simliar shapes, different numbers, different shades.</p>
<div class = "imageblocks"><img src="Image/red1solidoval.png" />
<img src="Image/red2openoval.png" />
<img src="Image/red3stripedoval.png" />
</div>
<p>The SET above has different colors, different shapes, different numbers, different shades.</p>
<h2>Additional Notes</h2>
<p>There are 81 unique cards in the deck.</p>
<p>Once a SET has been found, the card will be replaced by another 3 cards from the remaining deck.</p>
</div>
</div>
`;
