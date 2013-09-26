// Calculating if you are able to play in the Madden 25 playoffs

var wins = prompt("Enter how many wins do you have in Madden 25");

var loss = prompt("Enter how many losses do you have in Madden 25");

var ties = prompt("Enter how many ties do you have in Madden 25");

var totalscore = (wins - loss - ties);

var record = 30;

if (totalscore >= record){
    console.log("You are able to advance to the playoffs");

}
else{
    console.log("You Suck and can not play in the playoffs");

}



