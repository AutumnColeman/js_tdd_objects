//card
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  var cardType = this.point;
  if(this.point==11){
    cardType = "jack";
  }
  if(this.point==12){
    cardType = "queen";
  }
  if(this.point==13){
    cardType = "king";
  }
  if(this.point==1){
    cardType = "ace";
  }
  return "images/" + cardType + "_of_" + this.suit + ".png";
};

var myCard = new Card(5, 'diamonds');
myCard.getImageUrl();

//hand

function Hand() {
  this.hand = [];
}
Hand.prototype.addCard = function(card) {
  this.hand.push(card);
};
Hand.prototype.getPoints = function() {
  return this.hand.reduce(function(a, b) {
    return a + b.point;
  }, 0);
};

myHand.addCard(new Card(5, 'diamonds'));
var myHand = new Hand();
var card1 = new Card(5, 'diamonds');
var card2 = new Card(13, 'spades');
console.log(myHand.hand);
