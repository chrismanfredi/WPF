// How much the soda will cost for the party

var numberofsodas = prompt("Enter how many sodas you bought");

var costofsoda = 2.50;

var money = 15;

var total = numberofsodas * costofsoda;

if(total > money){
    console.log("You can buy the soda")
}

else if(total < money){
    console.log("You can't buy the soda!")
}



