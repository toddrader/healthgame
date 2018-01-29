var PointsGrant = 10;
var PointsUser = 40;
var Wins = 0;
var DamageGrant = 0;
var DamageUser = 0;
var Name = "";

function startgame() {
  if (prompt("Do you want to play?","yes or no") == "yes") {
  Name = prompt("What's your name")
  startCombat();
}

function getDamage(){
  DamageGrant = Math.floor(Math.random() * 5) + 1;
  DamageUser = Math.floor(Math.random() * 5) + 1;
}

function startCombat() {
  while(Wins < 3 && PointsUser >0) {
    getDamage();
    PointsGrant -= DamageGrant;
    PointsUser -= DamageUser;
    console.log (Name + " has " + PointsUser + " health left.")
    console.log ("Grant the Mighty Chicken" + " has " + PointsGrant + " health left.")
    if(PointsGrant <= 0){
      Wins ++;
      PointsGrant = 10;
    }
    // I put the first attack or quit after the first round of damage,
    // because I assumed, if the user replied yes to Do you want to play?
    // then they wanted to play at least one round before we ask if they want to
    // attack or quit. I could have put it first, but then the UX would seem
    // illogical to ask Do you want to play? and Do you want to attack or quit?
    // before anything happened.
    var attack = prompt ("Would you like to attack or quit?","attack or quit")
      if (attack == "quit") {
        console.log ("You quit.")
        break;
      }
  }
  if (PointsUser < 1) {
    console.log (Name + " lost!");
  } else if (attack != "quit") {
    console.log (Name + " won!");
  }
}
}
startgame();
