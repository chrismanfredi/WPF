var backtoschoolshopping = [];
backtoschoolshopping[0] = prompt ("Enter cost of the first item of clothing");
backtoschoolshopping[1] = prompt ("Enter cost of the second item of clothing");
backtoschoolshopping[2] = prompt ("Enter cost of the third item of clothing");
backtoschoolshopping[3] = prompt ("Enter cost of the fourth item of clothing");

var spendinglimit = prompt("Enter how much money you can spend total");

var total = backtoschoolshopping[0] + backtoschoolshopping[1] + backtoschoolshopping[2] + backtoschoolshopping[3];

if (total < spendinglimit){
    console.log("You can Buy these items!")
}

else{
    console.log("You can NOT buy these items please return some")

}