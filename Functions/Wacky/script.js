// Are you old enough to get into the club

var yourage = prompt("Enter your year born");

function ofage (yourage){

    var thisyear = 2013;
    var age = thisyear - yourage;
    var result ="";

    result = (age > 18) ? "You can get into the club because you were born in " + yourage +  "!" : "You cannot get into the club because you are under the required age!" ;



    return result;


}

console.log(ofage(yourage));
