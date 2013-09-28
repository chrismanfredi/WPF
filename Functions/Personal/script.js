// call of duty score

var game1 = prompt("Enter your score from game 1");
var game2 = prompt("Enter your score from game 2");
var game3 = prompt("Enter your score from game 3");

function totalscore (){

    var totalscore;
    var result = "";

    totalscore = (game1* game2 * game3) / 3;

    if (totalscore > 400){
        result = "Your total score is" + totalscore+  "Your GOOD!";
     }
    else{
     result = "Your Bad! your high score was" + totalscore + "!";

    }


    return result;
}

console.log(totalscore());
