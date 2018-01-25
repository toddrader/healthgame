var GrantsPoints = 10;
var UserPoints = 40;
var Wins = 0;
var Damage = 0;
var Name = "";
if (prompt("do you want to play?") === "yes") {
  //prompt
  Name = prompt("What's your name")
  while(Wins < 3 && UserPoints >0) {
    Damage = Math.floor(Math.random() * 2) + 1;
    GrantsPoints -= Damage;
    UserPoints -= Damage;
    console.log (Name + " has " + UserPoints + " health left.")
    console.log ("Grant the Mighty Chicken" + " has " + GrantsPoints + " health left.")
    if(GrantsPoints <= 0){
      Wins ++;
      GrantsPoints = 10;
    }
  }
  if (UserPoints < 1) {
    console.log (Name + " lost!");
  } else {
    console.log (Name + " won!");
  }
}
